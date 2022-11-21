import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Screen1 from './Screens/Screen1';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Screen1/>
      </View>
    );
  }
}
