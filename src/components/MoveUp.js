import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class FadeInView extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  moveUp() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.moveUp())
  }


  render() {
    const marginTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    return (
      <Animated.View
        style={{
          marginTop,
          height: 30,
          width: 30,
          backgroundColor: 'red'
        }}
      >
        {this.props.children}
      </Animated.View >
    );
  }
}
