// 通过reducer建立
// reducer ： 根据oldState 和 action 生成 newState
function numConsole(state=0, action){
  console.log(action)
  switch (action.type) {
    case 1:
      return state+1;
    case 2:
      return state-1;
    default:
      return 10;
  }
}


export  default numConsole;