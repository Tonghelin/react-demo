import { createStore } from 'redux';

// 1. 新建 store
// 通过reducer建立
// reducer ： 根据oldState 和 action 生成 newState
function counter(state=0, action){
  switch (action.type) {
    case 1:
      return '晴天';
    case 2:
      return '台风天';
    case 3:
      return '雷雨天';
    default:
      return '未知天气'
  }
}
// 新建store
const store= createStore(counter);

//
const init = store.getState();
console.log(init);

store.subscribe(()=>{
  console.log('派发了事件')
})

// 派发事件 传递action
store.dispatch({type: 1 });
console.log(store.getState());

