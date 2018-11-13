import { createStore, applyMiddleware, compose } from  'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/index';

// 建立store
export const store= createStore(RootReducer,compose(
  applyMiddleware(thunk),
  //
  window.devToolsExtension?window.devToolsExtension():f=>f
));

// 使用调试工具
// const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f

// 然后在index.js 中引入store
