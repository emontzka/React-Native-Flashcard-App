import React, { Component } from 'react'
import { Text, View, Animated, TouchableOpacity, StyleSheet } from 'react-native'
import CardBack from './CardBack';
import CardFront from './CardFront';
import QuizResults from './QuizResults';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { incrementCounter } from '../actions/counter';
import { red, green } from '../utils/_colors';
import { clearLocalNotification,setLocalNotification } from '../utils/api';
import TextButton from './TextButton';


// This uses Jason Browns tutorial for making a card flip animation:
// https://codedaily.io/screencasts/12/Create-a-Flip-Card-Animation-with-React-Native

class CardView extends Component {

  state={
    facing: true
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCard() {
    this.setState({ facing: !this.state.facing, });
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  submitAnswer(cardsLength, currentCard, correct, deck) {
    const nextCard = currentCard +1
    if (nextCard === cardsLength) {
      clearLocalNotification()
      .then(setLocalNotification)
      .then(
        this.props.navigation.navigate('QuizResults',{
        cardsLength,
        deck
      })
      )
    } else {
      this.flipCard()
      this.setState({facing: true})
      this.props.navigation.navigate('CardView', {
        currentCard: nextCard,
        correct
      })
    }
  }

  submitCorrectAnswer(cardsLength, currentCard, correct, deck) {
    this.props.dispatch(incrementCounter())

    correct = correct + 1
    this.submitAnswer(cardsLength, currentCard, correct, deck)
  }
  
  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }
    const { navigation, decks, correctAnswers } = this.props
    const deck = navigation.getParam('deck');
    // const cardsLength = navigation.getParam('cardsLength');
    const cardsLength = decks[deck].questions.length;
    const currentCard = navigation.getParam('currentCard');
    const correct = navigation.getParam('correct');
    const question = decks[deck].questions[currentCard].question || null
    const answer = decks[deck].questions[currentCard].answer || null
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>

        <Text style={{textAlign: 'center', fontSize: 20}}>{cardsLength - currentCard} cards remaining.</Text>
        {!this.state.facing && this.flipCard()}

        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>
              Q: {question}
            </Text>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
          <Text style={styles.flipText}>
          A: {answer}
        </Text> 
        <TextButton background={red} onPress={() => {this.submitAnswer(cardsLength, currentCard, correct, deck)} }>Incorrect</TextButton>
        <TextButton background={green} onPress={() => {this.submitCorrectAnswer(cardsLength, currentCard, correct, deck)} }>Correct</TextButton>

          </Animated.View>
        </View>
        
        <TextButton background={green} onPress={() => this.flipCard()}>{this.state.facing ? 'Show Answer' : 'Show Question'}</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flipCard: {
    minHeight: 350,
    width: 350,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
    textAlign: 'center'
  },
  flipCardBack: {
    backgroundColor: '#eeeeee',
    position: "absolute",
    top: 0,
  },
  flipText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

function mapStateToProps ({decks, correctAnswers}) {
  return {
    decks,
    correctAnswers
  }
}

export default connect(mapStateToProps)(CardView)
