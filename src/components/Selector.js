import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { updateMatch } from '../reducers/currentMatch';
import store from '../store';

export default class Selector extends Component {
  // 0 = next yet selected, 1 = heads, 2 = tails

  render() {
    return (
      <View style={styles.container}>
        <View><Text>Pick one:</Text></View>
        <View style={styles.pennyContainer}>
          <Button
            onPress={
              () => {
                store.dispatch(updateMatch({
                  playerFlip: 1,
                  compFlip: Math.round(Math.random()) + 1
                })
                )
              }
            }
            title="Heads"
          />
          <Button
            onPress={
              () => {
                store.dispatch(updateMatch({
                  playerFlip: 2,
                  compFlip: Math.round(Math.random()) + 1
                })
                )
              }
            }
            title="Tails"
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pennyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
