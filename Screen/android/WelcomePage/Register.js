import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      checkPassword: ''
    };
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  handleCheckPassword = (text) => {
    this.setState({checkPassword: text})
  }

  register = (email, username,  password, checkPassword) => {
    if (!email || !username || !password || !checkPassword){
      return alert(
        'Some Of The Input is Empty'
      )
    } else if (password !== checkPassword){
      return alert(
        "Password isn't same"
      )
    }
    return alert(
      'register'
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
          Username
        </Text>
        <TextInput
          style={{height: 40}}
          onChangeText={this.handleUsername}
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
          Retype Password
        </Text>
        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          onChangeText={this.handleCheckPassword}
        />
        <Button
          title="Register"
          onPress={() => this.register(this.state.email, this.state.username, this.state.password, this.state.checkPassword)}
        />
      </View>
    );
  }
}