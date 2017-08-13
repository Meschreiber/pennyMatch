import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';
import Welcome from './src/components/Welcome.js'
import GameScreen from './src/components/GameScreen'
import Rules from './src/components/Rules'

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
    this.onSelect = this.onSelect.bind(this);
  }

  // when user selects heads or tails 
  onSelect(num) {
    this.setState({
      evenFlip: num,
      oddFlip: Math.round(Math.random()) + 1
    });
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.appContainer}>
          <Route exact path="/" component={GameScreen} />
          <Route exact path="/rules/:num" component={Rules} />
          <Route path="/play" component={GameScreen} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});


//
// <Image source={require('./penny-icon.png')} style={{ width: 200, height: 200 }} />