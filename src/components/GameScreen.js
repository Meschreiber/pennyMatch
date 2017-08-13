import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ScoreBoard from './ScoreBoard'
import Selector from './Selector'
import Match from './Match'
import store from '../store'


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

  render() {
    console.log('state', this.state);
    return (
        <View style={styles.container}>
          <ScoreBoard />
          <Match />
          <Selector />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});
