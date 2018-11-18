import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import 'antd-mobile/dist/antd-mobile.css'
import {Button} from 'antd-mobile';
import { connect } from 'react-redux';

const mapStatetoProps=(state) =>{
}
const actionCreators = {   };
// App = connect(mapStatetoProps,actionCreators)(App)
@connect(mapStatetoProps,actionCreators)

class App extends Component {
  render() {

    return (
      <div className="App">
        <p> home页面 </p>
        <Button type='primary' >change</Button>
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
