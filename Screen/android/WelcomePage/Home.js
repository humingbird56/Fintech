import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={{padding: 10, fontSize: 42}}>
          Home
        </Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

export default Home
