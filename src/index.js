import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { store } from './store/index';

// function  render() {
//   return ReactDOM.render(<App store={store}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render);

function Menu2() {
  return <h1>我是MENU2</h1>
}
function Menu3() {
  return <h1>我是MENU33333</h1>
}


ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">MENU1</Link></li>
          <li><Link to="/menu2">MENU2</Link></li>
          <li><Link to="/menu3">MENU3</Link></li>
        </ul>
        {/*<Route path='/' component={App} />*/}
        {/* 使用exact 完全匹配*/}
        {/*<Redirect to='/'></Redirect>*/}
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/menu2' component={Menu2} />
          <Route path='/menu3' component={Menu3} />
          {/*path='/:location' 可以用来做404页面，要用Switch组件包裹*/}
          <Route path='/:location' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

serviceWorker.unregister();