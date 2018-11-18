import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  // Link,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom';
import { store } from './store/index';
import AuthRoute from './Component/authRoute/authroute';
import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute/>
        <Switch>
          <Route path={'/bossinfo'} component={BossInfo}/>
          <Route path={'/geniusinfo'} component={GeniusInfo}/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/register'} component={Register}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);