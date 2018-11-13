import { combineReducers }from 'redux';
import appConsole from './appReducer';
import numConsole from './numReducer';

//应为一个app不可能只有一个reducer所以combineReducers是用来合并所有的reducer的
const RootReducer =combineReducers({
  appConsole,
  numConsole
});
export default RootReducer;