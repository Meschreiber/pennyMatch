import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { resetScore } from '../reducers/totalScore';
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
        <Text style={styles.title}>Game Over</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.score}>Final Score:</Text>
          <View style={styles.rowContainer}>
            <View style={styles.link}><Text>You - {this.state.totalScore.playerScore}</Text></View>
            <View style={styles.link}><Text>Me - {this.state.totalScore.compScore}</Text></View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>{
            this.state.totalScore.compScore === this.state.totalScore.playerScore ?
              "😎 We tied! 😎"
              : (
                this.state.totalScore.compScore < this.state.totalScore.playerScore ?
                 "😁 You win! 😁"
                  :
                 "😭 You lose. 😭"
              )}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
          onPress={() => store.dispatch(resetScore())}>
            <Text style={styles.text}> Play again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center'
  },
    titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30
  },
  title: {
    fontSize: 30,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    margin: 5
  },
  score: {
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    margin: 5
  },
  rowContainer: {
    flexDirection: 'row',
  },
  link: {
    alignItems: 'center',
    padding: 10
  },
    text: {
    fontSize: 16,
    fontFamily: 'Avenir'
  },
    button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'thistle',
    padding: 10,
    margin: 30
  }
});
