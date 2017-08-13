import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ScoreBoard from './ScoreBoard'

export default class Pennies extends Component {
  render() {
    let pennies = '';
    for (var i = 0; i < this.props.num; i++) {
      pennies += '•';
    }
    return (
      <View>
        <Text>{this.props.owner} Pennies</Text>
        <Text>{pennies}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
