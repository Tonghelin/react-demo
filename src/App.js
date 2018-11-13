import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import 'antd-mobile/dist/antd-mobile.css'
import {Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { change, change2  } from './actions/index'

const mapStatetoProps=(state) =>{
  let { appConsole, numConsole} = state;
  return { appConsole, numConsole};
}
const actionCreators = { change, change2  };
// 使用装饰器 npm install babel-plugin-transform-decorators-legacy --save-dev 这样写
@connect(mapStatetoProps,actionCreators)

class App extends Component {
  render() {
    const {appConsole, numConsole,change,change2} = this.props;

    return (
      <div className="App">
        <p> { appConsole }-{numConsole} </p>
        <Button type='primary' onClick={change}>change</Button>
        <br/>
        <Button type='primary' onClick={()=> {change2(1)}}>change2</Button>
      </div>
    );
  }
}

// 未使用装饰器这样写connect
// const mapStatetoProps=(state) =>{
//   let { appConsole, numConsole} = state;
//   return { appConsole, numConsole};
// }
// const actionCreators = { change, change2  };
// App = connect(mapStatetoProps,actionCreators)(App)

export default App;
