import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../actions/userAction/userAction';
import { connect } from 'react-redux';

@withRouter
@connect(
  state=> state.user,
  {
    loadData
  }
)
class AuthRoute extends Component{ // 这只是一个普通的组件

  componentDidMount() {
    axios.get('/user/info',{user:'333333'}).then(
      (res) => {
        console.log(this.props.history); // react-router 4.0 给我们提供了一个withRouter 可以调用history，使用时@withRouter.看上面
        if (res.status===200) {
          console.log('当前用户信息是',res.data);
          if (res.data.code === 1) {
            this.props.loadData(res.data.data);
          }
          if (res.data.code === 0) {
            this.props.history.push('/login')
          }
        }
      }
    ).catch(
      (err) => {
        console.log('error',err)
      }
    )
  }

  render() {
    return <span></span>;
    // return null;
    // 如果返回的是null ，会报React is defined but never used
  }
}

export default AuthRoute;