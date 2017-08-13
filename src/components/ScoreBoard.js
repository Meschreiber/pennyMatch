import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Pennies from './Pennies'
import store from '../store'

// The scoreboard shows the number of pennies each player has

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
        <Pennies owner={'Your'} num={this.state.totalScore.playerScore} />
        <Pennies owner={'My'} num={this.state.totalScore.compScore} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 25,
    flexDirection: 'row',
    backgroundColor: 'peru',
  }
});
