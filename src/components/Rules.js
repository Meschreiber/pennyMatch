import React from 'react';
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';

// This component uses React-Router to cycle through the rules when a player first enters.

const rules = [
  "Let's play penny match!",
  "Each round, select either heads or tails.  I, your mobile device, 📱 will do the same.",
  "If the pennies match, you get both! 😁",
  "But if they don't, I gets both. 😲",
  "We'll play ten rounds..."]

const Rules = (props) => {
  return (
    <View>
      <Text style={styles.welcomeText}>{rules[props.match.params.num]}</Text>
      <View >
        {props.match.params.num < rules.length - 1 ?
          (<Link to={`/rules/${++props.match.params.num}`}>
            <Text style={styles.nextText}> Next </Text>
          </Link>)
          :
          (<Link to={'/play'}>
            <Text style={styles.nextText}> Let's play! </Text>
          </Link>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: 'Avenir',
    fontSize: 30,
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

export default Rules;

