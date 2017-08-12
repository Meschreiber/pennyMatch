import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default class Selector extends Component {
  render() {
    return (
      <View style={styles.pennyContainer}>
        <Button
          //onPress={() => { Alert.alert('You tapped the button!')}}
          title="Heads"
        />
        <Button
          //onPress={() => { Alert.alert('You tapped the button!')}}
          title="Tails"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  pennyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
