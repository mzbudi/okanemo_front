import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import SignIn from './Screen/SignIn';
import Dashboard from './Screen/Dashboard';
import Fitur1 from './Screen/Fitur1';
import Fitur2 from './Screen/Fitur2';
import Home from './Screen/Home';
import ChangeData from './Screen/ChangeData';
import ChangeRole from './Screen/ChangeRole';

var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/fitur1" component={Fitur1} />
      <Route exact path="/fitur2" component={Fitur2} />
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
