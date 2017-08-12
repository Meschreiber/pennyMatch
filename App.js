import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import Welcome from './components/Welcome'
// import NextButton from './components/NextButton.js'
import GameScreen from './components/GameScreen'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomeTextNum: 7,
      evenScore: 8,
      oddScore: 12,
      evenFlip: 0,
      oddFlip: 0,
      round: 1
    }
    this.onPressButton = this.onPressButton.bind(this);

  }

  onPressButton() {
    // console.log('num', this.state.welcomeTextNum++)
    this.setState({
      welcomeTextNum: ++this.state.welcomeTextNum
    })
  }

  render() {
    console.log('state', this.state);
    return (
      <View style={styles.container}>
        {this.state.welcomeTextNum < welcomeText.length ?
          <View >
            <Welcome style={styles.welcomeText} text={welcomeText[this.state.welcomeTextNum]} />
            <Button
              onPress={this.onPressButton}
              title="Next"
            />
          </View> :
          <View>
            <GameScreen
            round={this.state.round}
            evenScore={this.state.evenScore}
            oddScore={this.state.oddScore}
            />
          </View>
        }
      </View>
    );
  }
}

const welcomeText = [
  "Let's play penny match!",
  "Each round, select either heads or tails.  I (your phone) will do the same.",
  "If the pennies match, you get both! 😁",
  "But if they don't, I gets both. 😲",
  "We'll play ten rounds..."]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  welcomeText: {
    fontFamily: 'Avenir',
    fontSize: 30,
    textAlign: 'center',
    padding: 10
  }
});


//
// <Image source={require('./penny-icon.png')} style={{ width: 200, height: 200 }} />