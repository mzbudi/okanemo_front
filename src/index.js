import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import SignIn from './Screen/SignIn';
import Dashboard from './Screen/Dashboard';
import UserList from './Screen/UserList';
import Home from './Screen/Home';
import ChangeData from './Screen/ChangeData';
import ChangeRole from './Screen/ChangeRole';
import Profile from './Screen/Profile';

var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/userlist" component={UserList} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/changedata" component={ChangeData} />
      <Route path="/changerole" component={ChangeRole} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
