import React, { Component } from 'react';
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile';
import Logo from '../../Component/logo/logo';
import {login} from '../../actions/userAction/userAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
@connect(
 state=> state.user,
  {
    login
  }
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.handleChange =  this.handleChange.bind(this);
  }
  login() {
    this.props.login(this.state);
  }
  register() {
    this.props.history.push('/register');
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  render(){
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
        <Logo/>
        <h1>用户登录页面</h1>
        <WingBlank>
          <List>
            <InputItem
              onChange={value=>this.handleChange('user',value)}
            >账号:</InputItem>
            <InputItem
              onChange={value=>this.handleChange('pwd',value)}
            >密码:</InputItem>
          </List>
          <WhiteSpace/>
          <WhiteSpace/>
          <WhiteSpace/>
          <Button type='primary' onClick={this.login}>Login</Button>
          <WhiteSpace/>
          <Button type='primary' onClick={this.register}>Register</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
