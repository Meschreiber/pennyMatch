import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pennies from './Pennies'
import store from '../store'

export default class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Round {this.state.totalScore.round}
        </Text>
        <View style={styles.pennyContainer}>
          <Pennies owner={'Your'} num={this.state.totalScore.playerScore} />
          <Pennies owner={'My'} num={this.state.totalScore.compScore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  pennyContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-start'
  }
});
