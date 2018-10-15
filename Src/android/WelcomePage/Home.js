import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {fetchData} from '../../Redux/Actions/UserAction'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    console.log('props', this.props)
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

const mapStateToProps = (state) => {
  return {
    items: state.userReducer.items,
    loading: state.userReducer.loading,
    error: state.userReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Home)

export default connectComponent
