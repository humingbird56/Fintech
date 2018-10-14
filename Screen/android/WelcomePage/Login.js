import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (email, password) => {
    if (!email || !password){
      return alert(
        'Email Or Password Cannot be Empty'
      )
    }
    return alert(
      'login'
    )
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>
          Email
        </Text>
        <TextInput
          style={{height: 40}}
          textContentType='email-address'
          onChangeText={this.handleEmail}
        />
        <Text>
          Password
        </Text>
        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <Text>
          Forgot Password
        </Text>
        <Button
          title="Login"
          onPress = {() => this.login(this.state.email, this.state.password)}
        />
        <Text>
          Don't Have Account ?
        </Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}