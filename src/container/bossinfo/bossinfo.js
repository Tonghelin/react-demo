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
class BossInfo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      company: '',
      money: ''
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
          mode="BOSS信息完善"
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
          招聘职位
        </InputItem>
        <InputItem onChange={(value)=> this.onChange('company', value)}>
          公司名称
        </InputItem>
        <InputItem onChange={(value)=> this.onChange('money', value)}>
          薪资
        </InputItem>
        <TextareaItem
          onChange={(value)=> this.onChange('desc', value)}
          rows={3}
          autoHeight
          title={'职位要求'}
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

export default BossInfo;

