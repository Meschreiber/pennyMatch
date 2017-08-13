import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default class Selector extends Component {
  // 0 = heads, 1 = tails
  
  render() {
    return (
      <View style={styles.pennyContainer}>
        <Button
          onPress={() => { this.props.onSelect(1) }}
          title="Heads"
        />
        <Button
          onPress={() => { this.props.onSelect(2) }}
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
