import React, { Component } from 'react';
import Routes from './Routes'
import {Provider} from 'react-redux'
import Store from '../Redux/Store/'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes/>
      </Provider>
    );
  }
}