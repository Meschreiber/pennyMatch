import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';
import Welcome from './src/components/Welcome.js';
import GameScreen from './src/components/GameScreen';
import Rules from './src/components/Rules';

// This is the main app 
const App = () => {
    return (
      <NativeRouter>
        <View style={styles.appContainer}>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/rules/:num" component={Rules} />
          <Route path="/play" component={GameScreen} />
        </View>
      </NativeRouter>
    );
  }

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;
