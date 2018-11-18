import React, {Component} from 'react';
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import Logo from '../../Component/logo/logo';
import {connect} from 'react-redux';
import { register } from "../../actions/userAction/userAction";

@connect(
  state=>state.user,
  {
    register
  }
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius' // boss
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(key,val){
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    const userInfo = this.state;
    this.props.register(userInfo);
  }
  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
        <Logo/>
        <h1>用户注册页面</h1>
        <WingBlank>
          <List>
            <InputItem
              onChange={v=>this.handleChange('user',v)}
            >账号:</InputItem>
            <InputItem
              onChange={v=>this.handleChange('pwd',v)}
            >密码:</InputItem>
            <InputItem
              onChange={v=>this.handleChange('repeatpwd',v)}
            >确认密码:</InputItem>
          </List>
          <WhiteSpace/>
          <List>
            <RadioItem
              checked={this.state.type==='genius'}
              onChange={()=>this.handleChange('type','genius')}
            >求职大神</RadioItem>
            <RadioItem
              checked={this.state.type==='boss'}
              onChange={()=>this.handleChange('type','boss')}
            >企业HR</RadioItem>
          </List>
          <WhiteSpace/>
          <WhiteSpace/>

          <Button type='primary'
            onClick={this.handleRegister}
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Register;
