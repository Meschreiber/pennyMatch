import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ScoreBoard from './ScoreBoard'
import Selector from './Selector'

export default class GameScreen extends Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <ScoreBoard
          round={this.props.round}
          evenScore={this.props.evenScore}
          oddScore={this.props.oddScore} />
      </View>
      <View>
        <Selector />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 5
  }
});