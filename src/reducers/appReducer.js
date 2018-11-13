// 通过reducer建立
// reducer ： 根据oldState 和 action 生成 newState
function appConsole(state=0, action){
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


export  default appConsole;