import React, { Component } from 'react'
import { Text, View, Animated, TouchableOpacity } from 'react-native'
import CardBack from './CardBack';
import CardFront from './CardFront';
import QuizResults from './QuizResults';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { incrementCounter } from '../actions/counter';
import { red } from '../utils/_colors';
import { clearLocalNotification,setLocalNotification } from '../utils/api';

class CardView extends Component {

  // state={correct : 0}

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
      this.props.navigation.navigate('CardView', {
        currentCard: nextCard,
        correct
      })
    }
  }

  submitCorrectAnswer(cardsLength, currentCard, correct, deck) {
    this.props.dispatch(incrementCounter())
    console.log(this.props.correctAnswers.count)
    correct = correct + 1
    this.submitAnswer(cardsLength, currentCard, correct, deck)
  }
  
  render() {
    const { navigation, decks, correctAnswers } = this.props
    const deck = navigation.getParam('deck');
    // const cardsLength = navigation.getParam('cardsLength');
    const cardsLength = decks[deck].questions.length;
    const currentCard = navigation.getParam('currentCard');
    const correct = navigation.getParam('correct');
    const question = decks[deck].questions[currentCard].question || null
    const answer = decks[deck].questions[currentCard].answer || null
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 20}}>
          This question is {question}
          </Text>
          <Text style={{textAlign: 'center', fontSize: 20}}>
          This answer is {answer}
        </Text>
        <Text style={{fontSize: 30, color: 'red'}}>currentCard is {currentCard}</Text>
        <Text style={{textAlign: 'center', fontSize: 20}}>You have {cardsLength - currentCard} remaining.</Text>
        <TouchableOpacity  onPress={() => {this.submitCorrectAnswer(cardsLength, currentCard, correct, deck)} }>
          <Text style={{textAlign: 'center', fontSize: 20}}>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {this.submitAnswer(cardsLength, currentCard, correct, deck)} }>
          <Text style={{textAlign: 'center', fontSize: 20}}>
            Incorrect
          </Text>
          <Text style={{textAlign: 'center', fontSize: 20, color: red}}>{correctAnswers.count}</Text>
        </TouchableOpacity>
        
        {/* <CardFront /> */}
        {/* <CardBack /> */}
        {/* <QuizResults /> */}
      </View>
    )
  }
}

function mapStateToProps ({decks, correctAnswers}) {
  return {
    decks,
    correctAnswers
  }
}

export default connect(mapStateToProps)(CardView)
