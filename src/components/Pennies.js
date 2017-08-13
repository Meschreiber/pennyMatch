import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pennies extends Component {
  render() {
    let pennies = '';
    for (var i = 0; i < this.props.num; i++) {
      pennies += '•';
    }
    return (
      <View style={styles.score}>
        <Text style={{ fontFamily: 'Avenir'}}>{this.props.owner} Pennies</Text>
        <Text>{pennies}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    alignItems: 'center',
    width: 100,
    margin: 20
  }
});
