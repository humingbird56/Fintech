/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './Screen/android/App'


export default class MyFirstApp extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
