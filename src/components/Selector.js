import React, { Component } from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, Image } from 'react-native';
import { updateMatch } from '../reducers/currentMatch';
import store from '../store';

// The selector component allows users to select heads or tails by clicking on images of pennies
// 0 = next yet selected, 1 = heads, 2 = tails

export default class Selector extends Component {

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
        <View style={styles.pickContainer}><Text style={styles.text} >Pick one:</Text></View>
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
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Avenir'
  },
  pennyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pickContainer: {
    margin: 15
  },
  pennyButton: {
    margin: 15,
    marginTop: 0
  },
  image: {
    width: 100,
    height: 100,
  }
});
