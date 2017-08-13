import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { resetMatch } from '../reducers/currentMatch';
import { updateScore } from '../reducers/totalScore';
import store from '../store';

export default class Match extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.calculateScore = this.calculateScore.bind(this);
  }

  calculateScore(player) {
    let score = 0;
    if (player === 'player') {
      score = this.state.totalScore.playerScore; 
      score += this.state.currentMatch.playerFlip === this.state.currentMatch.compFlip ? 2 : 0;
    }
    else {
      score = this.state.totalScore.compScore;
      score += this.state.currentMatch.playerFlip !== this.state.currentMatch.compFlip ? 2 : 0;
    }
    return score;
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
        <Text>Current Match</Text>
        <View style={styles.rowContainer}>
          <View>
            <Text>You</Text>
            <Text>{this.state.currentMatch.playerFlip ? (this.state.currentMatch.playerFlip === 1 ? 'Heads' : 'Tails') : '?'}</Text>
          </View>
          <View>
            <Text>Me</Text>
            <Text>{this.state.currentMatch.playerFlip ? (this.state.currentMatch.compFlip === 1 ? 'Heads' : 'Tails') : '?'}</Text>
          </View>
        </View>
        {this.state.currentMatch.hasSelected ?
          <Button
            onPress={() => {
              store.dispatch(resetMatch())
              store.dispatch(updateScore({
                round: ++this.state.totalScore.round,
                playerScore: this.calculateScore('player'),
                compScore: this.calculateScore('comp')
              }))
            }
            }
            title="Next Round"
          />
          :
          <Text> I'll reveal my choice when you pick yours.</Text>}
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
  rowContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-start'
  }
});