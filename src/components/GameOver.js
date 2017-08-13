import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { updateScore } from '../reducers/totalScore';
import store from '../store';

export default class GameOver extends Component {
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
     
     {this.state.totalScore < 10 ?() : ()}