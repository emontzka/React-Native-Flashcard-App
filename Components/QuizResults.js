import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextButton from './TextButton';
import { green, purple } from '../utils/_colors';
import { connect } from 'react-redux';
import correctAnswers from '../reducers/correctAnswers';
import { resetCounter } from '../actions/counter';


class QuizResults extends Component {
  startQuiz = (deck) => {
    console.log(`deck is ${deck}`);
    // const deck = this.props.navigation.getParam('deck');
    this.props.dispatch(resetCounter())
    this.props.navigation.navigate('CardView', {
      deck,
      currentCard: 0
    })
  }

  backToDeck= (deck) => {
    this.props.navigation.navigate('DeckView', {
      deck
    })
  }
  render() {
    const deck = this.props.navigation.getParam('deck')
    const correct = this.props.correctAnswers.count
    const total = this.props.decks[deck].questions.length
    return (
      <View>
        <Text> You got {correct} out of {total}  correct.</Text>
        <TextButton background={green} onPress={() => this.startQuiz(deck)}>Start Quiz Again?</TextButton>
        <TextButton background={purple} onPress={() => this.backToDeck(deck)}>Back to Deck</TextButton>
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

export default connect(mapStateToProps)(QuizResults)
