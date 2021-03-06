import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// The resetMatch action creator resets the players and computer's current choices
import { resetMatch } from '../reducers/currentMatch';
// The updateScore action creator sends the appropriate score for the player and computer to the state
import { updateScore } from '../reducers/totalScore';
import FadeInView from './FadeInView'
import store from '../store';

export default class Match extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.calculateScore = this.calculateScore.bind(this);
  }

  calculateScore(player) {
    let score = 0;
    // In order for the player to score, the flips must match
    if (player === 'player') {
      score = this.state.totalScore.playerScore;
      score += this.state.currentMatch.playerFlip === this.state.currentMatch.compFlip ? 2 : 0;
    }
    // In order for the computer to score, the flips must not match
    else {
      score = this.state.totalScore.compScore;
      score += this.state.currentMatch.playerFlip !== this.state.currentMatch.compFlip ? 2 : 0;
    }
    return score;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Round {this.state.totalScore.round}
          </Text>
        </View>
        {
          this.state.currentMatch.playerFlip ?
            (
              this.state.currentMatch.playerFlip === this.state.currentMatch.compFlip ?
                <Text style={styles.text}>🎉 You win! 🎉 </Text>
                : <Text style={styles.text}>I win! 😈 </Text>
            )
            :
            <Text> </Text>
        }
        <View style={styles.rowContainer}>
          <View style={styles.pennyContainer}>
            <View style={styles.label}><Text style={styles.text}>You</Text></View>
            {this.state.currentMatch.playerFlip ? (this.state.currentMatch.playerFlip === 1 ?
              <Image
                style={styles.image}
                source={require('../../images/heads.png')}
              /> :
              <Image
                style={styles.image}
                source={require('../../images/tails.png')}
              />
            ) : (
                <Image
                  style={styles.image}
                  source={require('../../images/question.png')}
                />
              )
            }
          </View>
          <View style={styles.pennyContainer}>
            <View style={styles.label}><Text style={styles.text}>Me</Text></View>
            {this.state.currentMatch.playerFlip ? (this.state.currentMatch.compFlip === 1 ?
              <FadeInView>
                <Image
                  style={styles.image}
                  source={require('../../images/heads.png')}
                />
              </FadeInView>
              :
              <FadeInView>
                <Image
                  style={styles.image}
                  source={require('../../images/tails.png')}
                />
              </FadeInView>
            ) : (
                <Image
                  style={styles.image}
                  source={require('../../images/question.png')}
                />
              )
            }
          </View>
        </View>
        <View style={styles.caption}>
          {
            this.state.currentMatch.hasSelected ?
              (this.state.totalScore.round < 10 ?
                <TouchableOpacity
                  onPress={() => {
                    store.dispatch(resetMatch())
                    store.dispatch(updateScore({
                      round: ++this.state.totalScore.round,
                      playerScore: this.calculateScore('player'),
                      compScore: this.calculateScore('comp')
                    }))
                  }
                  }
                >
                  <View style={styles.button}><Text style={styles.text} >Next Round</Text></View>
                </TouchableOpacity>
                :
                <TouchableOpacity
                  onPress={() => {
                    store.dispatch(resetMatch())
                    store.dispatch(updateScore({
                      round: ++this.state.totalScore.round,
                      playerScore: this.calculateScore('player'),
                      compScore: this.calculateScore('comp')
                    }))
                  }
                  }
                >
                  <View style={styles.button}><Text style={styles.text} >See final score</Text></View>
                </TouchableOpacity>
              )
              :
              <Text style={{ fontFamily: 'Avenir', fontSize: 13 }} > I'll reveal my choice when you pick yours.</Text>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'peru',
    margin: 10
  },
  rowContainer: {
    flexDirection: 'row',
  },
  pennyContainer: {
    alignItems: 'center',
    margin: 15,
    marginTop: 0,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5
  },
  text: {
    fontSize: 16,
    fontFamily: 'Avenir'
  },
  label: {
    marginBottom: 10
  },
  caption: {
    marginTop: 10
  },
  button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'thistle',
    padding: 5
  }
});
