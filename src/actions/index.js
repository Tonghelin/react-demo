// import * as types from '../constans/actionTypes';

export let change2 = status => {
  // 使用中间件处理异步 返回一个函数，这个函数的参数是dispatch
  return dispatch => {
    switch(status) {
      case 1:
        dispatch({type:1});
        break;
      case 2:
        dispatch({type:2});
        break;
      default:
        dispatch({type:3})
        break;
    }
  }
}

export function change() {
  // 没有使用中间件的情况下返回的是一个对象
  return {type:2}
}