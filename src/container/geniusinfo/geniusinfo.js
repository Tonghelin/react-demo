import React, { Component } from 'react';
import {
  NavBar,
  InputItem,
  WhiteSpace,
  TextareaItem,
  Button
} from 'antd-mobile';
import AvatarSelector from '../../Component/avatar-selector/avatar-selector';
import {connect} from 'react-redux';
import { update } from '../../actions/userAction/userAction';
import { Redirect } from 'react-router-dom'

@connect(
  state=>state.user,
  {
    update
  }
)
class GeniusInfo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: ''
    }
    this.onChange =  this.onChange.bind(this);
  }
  onChange(key, val) {
    console.log(val)
    this.setState({
      [key]: val
    })
  }

  render() {
    const path =  this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null }
        <NavBar
          mode="大神请完善信息"
        >NavBar</NavBar>
        <WhiteSpace/>
        <AvatarSelector
          selectAvatar={(imagename)=>{
            this.setState({
              avatar: imagename
            })
          }}
        />
        <InputItem onChange={(value)=> this.onChange('title', value)}>
          求职岗位
        </InputItem>
        <TextareaItem
          onChange={(value)=> this.onChange('desc', value)}
          rows={3}
          autoHeight
          title={'个人简介'}
        />
        <WhiteSpace/>
        <Button
          type='primary'
          onClick={()=>{
            this.props.update(this.state)
          }}
        >保存</Button>
      </div>
    )
  }
}

export default GeniusInfo;

