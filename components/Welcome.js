import React, { Component } from 'react';
import {Text, View } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <Text style={this.props.style}>{this.props.text}</Text>
    );
  }
}

export default Welcome;
