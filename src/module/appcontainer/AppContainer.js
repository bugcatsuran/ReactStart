/**
 * Created by suran on 2017/11/23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">
            主页
          </Link>
        </div>
        <div>
          <Link to="community">
            社区
          </Link>
        </div>
        <div>
          <Link to="my">
            我的
          </Link>
        </div>
      </div>
    )
  }
}