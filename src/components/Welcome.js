import React from 'react';
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';

// This is the welcome screen

const Welcome = () => {
  return (
    <View>
      <Text style={styles.welcomeText}>Let's play</Text>
      <Text style={styles.welcomeText}>penny match!</Text>
      <View >
        <Link to='/rules/1'>
          <Text style={styles.nextText}> Read the rules</Text>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: 'Avenir',
    fontSize: 45,
    textAlign: 'center',
    padding: 10
  },
  nextText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  }
});

export default Welcome;
