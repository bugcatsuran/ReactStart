/**
 * Created by suran on 2017/11/20.
 */

import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { createStore } from 'redux';
import {Provider} from 'react-redux';


import Home from './module/home';
import Community from './module/community';
import My from './module/my';
import reducer from './Reducers.js';

const store = createStore(reducer);

export default class Routers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="community" component={Community}/>
          <Route path="my" component={My}/>
        </Router>
      </Provider>
    )
  }
}