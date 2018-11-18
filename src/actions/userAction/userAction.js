// 用户操作（数据的处理过程）  最终返回一个dispatch

import * as types from "../../constants/actionTypes";
import axios from 'axios';

function errorMsg(msg) {
  return { msg, type: types.REGISTER_ERROR_MSG} ;
}

function loginSuccess(data) {
  return{data, type: types.USER_LOGIN_SUCCESS}
}
function registerSuccess(data) {
  return{data,type:types.REGISTER_SUCCESS_MSG}
}
function authSuccess(obj) {
  const {pwd, ...data} = obj;  // 这样data 就过滤掉pwd了
  return{data,type:types.AUTH_SUCCESS}
}

export function loadData(userInfo) {
  return { type:types.LOAD_DATA, data: userInfo }
}

export function login({user, pwd}) {
  if (!user|| !pwd) {
    return errorMsg('账号密码不能为空');
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd})
      .then(
        (res) => {
          if (res.status===200&&res.data.code===1) {
            dispatch(loginSuccess(res.data));
          }else {
            dispatch(errorMsg(res.data.msg));
          }
        }
      )
      .catch(
        (err) => {
          console.log(err, err)
          // return errorMsg('err');
        }
      )
  }

}

export function register({user, pwd, repeatpwd, type}) {
  if (!user||!pwd||!repeatpwd||!type) {
    console.log('请完善注册信息',user, pwd, repeatpwd, type)
    return errorMsg('请完善注册信息');
  }
  if (pwd!==repeatpwd) {
    return errorMsg('两次输入的密码不一致');
  }
  return dispatch => {
    axios.post('/user/register', {user, pwd, repeatpwd, type})
      .then((res) => {
        console.log(res.data)
        let msg = res.data.msg;
        if (res.status===200 && res.data.code===1) {
          dispatch(registerSuccess({user, pwd, repeatpwd, type, msg}) )
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}

export function update(data) {
  return dispatch=>{
    axios.post('/user/update', data)
      .then(
        (res) => {
          if (res.status===200 && res.data.code===1) {
            dispatch(authSuccess(res.data.data) )
          }else {
            dispatch(errorMsg(res.data.msg))
          }
        }
      )
  }
}




