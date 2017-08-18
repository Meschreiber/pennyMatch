import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import { updateMatch } from '../reducers/currentMatch';
import store from '../store';

// The selector component allows users to select heads or tails by clicking on images of pennies
// 0 = next yet selected, 1 = heads, 2 = tails

export default class Selector extends Component {

  constructor() {
    super();
    this.state = store.getState();
    //this.animatedHead = new Animated.Value(0);
    //this.animatedTail = new Animated.Value(0);
    this.moveUp = this.moveUp.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveUp() {
    Animated.timing(
      this.state.currentMatch.animatedHead,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.moveUp())
  }

  moveLeft() {
    Animated.timing(
      this.state.currentMatch.animatedTail,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.moveLeft())
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log('STATE', this.state);
    const marginHeadTop = this.state.currentMatch.animatedHead.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -245]
    })
    const marginLeft = this.state.currentMatch.animatedTail.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -180]
    })
    const marginTailTop = this.state.currentMatch.animatedTail.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -245]
    })

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
                this.moveUp();
              }
            }
          >
            <Animated.View
              style={{
                marginTop: marginHeadTop
              }}
            >
              <Image
                style={styles.image}
                source={require('../../images/heads.png')}
              />
            </Animated.View >
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
                this.moveLeft();
              }
            }
          >
            <Animated.View
              style={{
                marginLeft,
                marginTop: marginTailTop
              }}
            >
              <Image
                style={styles.image}
                source={require('../../images/tails.png')}
              />
            </Animated.View>
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
