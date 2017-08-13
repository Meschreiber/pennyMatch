import React, { Component } from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, Image } from 'react-native';
import { updateMatch } from '../reducers/currentMatch';
import store from '../store';

export default class Selector extends Component {
  // 0 = next yet selected, 1 = heads, 2 = tails
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
        <View><Text>Pick one:</Text></View>
        <View style={styles.pennyContainer}>
          <TouchableOpacity
            disabled={!!this.state.currentMatch.playerFlip}
            style={styles.pennyButton}
            onPress={
              () => {
                store.dispatch(updateMatch({
                  playerFlip: 1,
                  compFlip: Math.round(Math.random()) + 1
                })
                )
              }
            }
          >
            <Image
              style={styles.image}
              source={require('../../images/heads.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!!this.state.currentMatch.playerFlip}
            style={styles.pennyButton}
            onPress={
              () => {
                store.dispatch(updateMatch({
                  playerFlip: 2,
                  compFlip: Math.round(Math.random()) + 1
                })
                )
              }
            }
          >
            <Image
              style={styles.image}
              source={require('../../images/tails.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  pennyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pennyButton: {
    margin: 20
  },
  image: {
    width: 100,
    height: 100,
  }
});
