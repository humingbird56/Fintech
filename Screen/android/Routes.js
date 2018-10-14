import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './WelcomePage/Home'
import Login from './WelcomePage/Login'
import Register from './WelcomePage/Register'

const RootStack = createStackNavigator({
  Home: { 
    screen: Home 
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
}, {
  initialRouteName: 'Home',
  // headerMode: 'none'
})

export default class Routes extends React.Component {
  render() {
    return <RootStack/>;
  }
}