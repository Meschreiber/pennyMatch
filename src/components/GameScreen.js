import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ScoreBoard from './ScoreBoard';
import Selector from './Selector';
import Match from './Match';
import GameOver from './GameOver';
import store from '../store';


export default class GameScreen extends Component {
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

// The game screen either renders a scoreboard, current match, and selector OR the gameover screen depending on whether or not there are more than ten rounds
  render() {
    return this.state.totalScore.round <= 10 ?
      (<View style={styles.container}>
        <ScoreBoard />
        <Match />
      </View>
      )
      :
      <GameOver />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});
