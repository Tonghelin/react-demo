import * as types from '../../constants/actionTypes';
import {getRedirectionPath} from "../../util/util";

const initialState = {
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

export function user(state=initialState,action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS_MSG:
      return {...state, msg:'',redirectTo: getRedirectionPath(action.data),isAuth: true, ...action.data};
    case types.AUTH_SUCCESS:
      return {...state, msg:'',redirectTo: getRedirectionPath(action.data) , ...action.data};
    case types.USER_LOGIN_SUCCESS:
      return {...state, msg:action.data.msg, redirectTo: getRedirectionPath(action.data.data),isAuth: true, ...action.data.data};
    case types.LOAD_DATA:
      return {...state, msg:action.data};
    case types.REGISTER_ERROR_MSG:
      return {...state, msg:action.msg};
    default:
      return state;
  }
}