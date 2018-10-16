import React, { Component, Fragment } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './Src/android/App'


export default class Fintech extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('Fintech', () => Fintech);
