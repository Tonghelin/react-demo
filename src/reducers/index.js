import { combineReducers }from 'redux';
import { user } from './userReducer'

//应为一个app不可能只有一个reducer所以combineReducers是用来合并所有的reducer的
const RootReducer =combineReducers({
  user
});
export default RootReducer;