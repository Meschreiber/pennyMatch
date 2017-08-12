import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pennies from './Pennies'

export default class ScoreBoard extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Round {this.props.round}</Text>
        <View style={styles.pennyContainer}>
          <Pennies owner={'Your'} num={this.props.evenScore} />
          <Pennies owner={'My'} num={this.props.oddScore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  pennyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});