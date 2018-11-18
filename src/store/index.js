import { createStore, applyMiddleware, compose } from  'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/index';

// 建立store
export const store= createStore(RootReducer,compose(
  applyMiddleware(thunk),
  // 下面这句是判断是否有可用的调试工具
  window.devToolsExtension?window.devToolsExtension():f=>f
));
