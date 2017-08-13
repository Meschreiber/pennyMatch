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
    this.onWelcomePress = this.onWelcomePress.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  // moves the welcome screen along
  onWelcomePress() {
    this.setState({
      welcomeTextNum: ++this.state.welcomeTextNum
    })
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
      // <View style={styles.container}>
      //   {this.state.welcomeTextNum < welcomeText.length ?
      //     <View >
      //       <Welcome style={styles.welcomeText} text={welcomeText[this.state.welcomeTextNum]} />
      //       <Button
      //         onPress={this.onWelcomePress}
      //         title="Next"
      //       />
      //     </View> :
      //     <View>
      //       <GameScreen
      //       round={this.state.round}
      //       evenScore={this.state.evenScore}
      //       oddScore={this.state.oddScore}
      //       onSelect={this.onSelect}
      //       />
      //     </View>
      //   }
      // </View>
      <NativeRouter>
        <View style={styles.appContainer}>
          <Route exact path="/" component={Welcome} />
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
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});


//
// <Image source={require('./penny-icon.png')} style={{ width: 200, height: 200 }} />