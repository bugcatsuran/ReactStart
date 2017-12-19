/**
 * Created by suran on 2017/11/20.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import AppContainer from './module/appcontainer/AppContainer';
import Community from './module/community/Community';
import My from './module/my/My.js';
//import My from './module/My/My;

export default class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}/>
        <Route path="community" component={Community}/>
        <Route path="my" component={My}/>
      </Router>
    )
  }
}