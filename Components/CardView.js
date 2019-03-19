import React, { Component } from 'react'
import { Text, View, Animated, TouchableOpacity } from 'react-native'
import CardBack from './CardBack';
import CardFront from './CardFront';
import QuizResults from './QuizResults';
import styled from 'styled-components';
import { connect } from 'react-redux';

class CardView extends Component {

  // state={correct : 0}

  submitAnswer(cardsLength, currentCard, correct, deck) {
    const nextCard = currentCard +1
    nextCard === cardsLength
    ? this.props.navigation.navigate('QuizResults',{
      cardsLength,
      correct
    })
    : this.props.navigation.navigate('CardView', {
      currentCard: nextCard,
      correct
    })
  }

  submitCorrectAnswer(cardsLength, currentCard, correct, deck) {
    correct = correct + 1
    this.submitAnswer(cardsLength, currentCard, correct, deck)
  }
  
  render() {
    const { navigation, decks } = this.props
    const deck = navigation.getParam('deck');
    const cardsLength = navigation.getParam('cardsLength');
    const currentCard = navigation.getParam('currentCard');
    const correct = navigation.getParam('correct');
    const question = decks[deck].questions[currentCard].question
    const answer = decks[deck].questions[currentCard].answer
    return (
      <View>
        <Text>
          This question is {question}
          </Text>
          <Text>
          This answer is {answer}
        </Text>
        <Text>You have {cardsLength - currentCard} remaining.</Text>
        <TouchableOpacity  onPress={() => {this.submitCorrectAnswer(cardsLength, currentCard, correct, deck)} }>
          <Text>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {this.submitAnswer(cardsLength, currentCard, correct, deck)} }>
          <Text>
            Incorrect
          </Text>
        </TouchableOpacity>
        
        {/* <CardFront /> */}
        {/* <CardBack /> */}
        {/* <QuizResults /> */}
      </View>
    )
  }
}

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CardView)
