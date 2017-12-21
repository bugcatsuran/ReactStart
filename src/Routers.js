/**
 * Created by suran on 2017/11/20.
 */

import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { createStore } from 'redux';
import {Provider} from 'react-redux';


import AppContainer from './module/appcontainer/AppContainer';
import Community from './module/community/Community';
import My from './module/my/My.js';
import reducer from './reducer';

const store = createStore(function () {
  
});

export default class Routers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AppContainer}/>
          <Route path="community" component={Community}/>
          <Route path="my" component={My}/>
        </Router>
      </Provider>
    )
  }
}