import React, { Component } from 'react';
import Header from './header';
import Resources from './resources';
import { Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Route
               path={this.props.match.url + 'resources'}
               component={Resources}
               />
        </div>
    );
  }
}
