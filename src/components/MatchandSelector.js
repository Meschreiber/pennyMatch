import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native';
// The resetMatch action creator resets the players and computer's current choices
import { resetMatch, updateMatch } from '../reducers/currentMatch';
import { updateScore } from '../reducers/totalScore';
import FadeInView from './FadeInView'
import store from '../store';

export default class Match extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.offsetYHeads = new Animated.Value(0);
    this.offsetYTails = new Animated.Value(0);
    this.offsetXTails = new Animated.Value(0);
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

  moveLeft() {
    Animated.timing(
      this.offsetXTails,
      {
        toValue: -131,
        duration: 1000
      }
    ).start();
  }

  moveRight() {
    Animated.timing(
      this.offsetXTails,
      {
        toValue: 0,
        duration: 1000
      }
    ).start();
  }
  moveUpTails() {
    Animated.timing(
      this.offsetYTails,
      {
        toValue: -220,
        duration: 1000
      }
    ).start();
  }

  moveDownTails() {
    Animated.timing(
      this.offsetYTails,
      {
        toValue: 0,
        duration: 1000
      }
    ).start();
  }

  moveUpHeads() {
    Animated.timing(
      this.offsetYHeads,
      {
        toValue: -220,
        duration: 1000
      }
    ).start();
  }

  moveDownHeads() {
    Animated.timing(
      this.offsetYHeads,
      {
        toValue: 0,
        duration: 1000
      }
    ).start();
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
        <View style={styles.matchContainer}>
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
              {this.state.currentMatch.playerFlip ?
                <View style={styles.image} /> :
                <Image
                  style={styles.image}
                  source={require('../../images/question.png')}
                />
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
                      this.moveDownHeads();
                      this.moveDownTails();
                      this.moveRight();
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
        <View style={styles.selectContainer}>
          <View style={styles.pickContainer}><Text style={styles.text} >Pick one:</Text></View>
          <View style={styles.selectPennyContainer}>
            <Animated.View style={{ transform: [{ translateY: this.offsetYHeads }] }}>
              <TouchableOpacity
                disabled={!!this.state.currentMatch.playerFlip}
                style={styles.pennyButton}
                onPress={
                  () => {
                    this.moveUpHeads()
                    store.dispatch(updateMatch({
                      playerFlip: 1,
                      compFlip: Math.round(Math.random()) + 1
                    })
                    )
                  }
                }
              >
                <Image
                  style={styles.image}
                  source={require('../../images/heads.png')}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: this.offsetXTails }, {translateY: this.offsetYTails}] }}>
              <TouchableOpacity
                disabled={!!this.state.currentMatch.playerFlip}
                style={styles.pennyButton}
                onPress={
                  () => {
                    this.moveLeft();
                    this.moveUpTails();
                    store.dispatch(updateMatch({
                      playerFlip: 2,
                      compFlip: Math.round(Math.random()) + 1
                    })
                    )
                  }
                }
              >
                <Image
                  style={styles.image}
                  source={require('../../images/tails.png')}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  matchContainer: {
    flex: 3,
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'peru',
    margin: 10,
    marginBottom: 0,
    padding: 0
  },
  rowContainer: {
    flexDirection: 'row',
  },
  pennyContainer: {
    alignItems: 'center',
    margin: 15,
    marginTop: 0,
    marginBottom: 0
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
  },
  selectContainer: {
    flex: 3,
    alignItems: 'center',
  },
  selectPennyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pickContainer: {
    margin: 15
  },
  pennyButton: {
    margin: 15,
    marginTop: 0
  }
});
