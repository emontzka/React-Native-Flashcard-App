import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import TextButton from './TextButton';
import { purple, green } from '../utils/_colors';
import { connect } from 'react-redux';
import { resetCounter } from '../actions/counter';

class DeckView extends Component {
 

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    }
  };

  

  addCard = (deck, e) => {
    this.props.navigation.navigate('AddCard', {
      deck
    })
  }

  startQuiz = (deck, cardsLength, e) => {
    this.props.dispatch(resetCounter)
    this.props.navigation.navigate('CardView', {
      deck,
      currentCard: 0,
      correct: 0
    })
  }

  render() {
    const { navigation, decks } = this.props;
    const deck = navigation.getParam('deck');
    const title = decks[deck].title;
    const cardsLength = decks[deck].questions.length;
    const hasCards = cardsLength > 0;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 32, color: green, fontWeight: 'bold'}}>{title}</Text>
        <Text> {cardsLength} cards</Text>
        <KeyboardAvoidingView>
          {!hasCards && (
          <Text>Add cards to deck to be able to take quiz.</Text>
          )}
          <TextButton background={purple} onPress={(e) => this.addCard(deck, e)}>Add Card</TextButton>
          {hasCards && (
            <TextButton background={green} onPress={(e) => this.startQuiz(deck, cardsLength, e)}>Start Quiz</TextButton>
          )}
          
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapStateToProps({ decks}) {
  
  return {
   decks
  }
}
export default connect(mapStateToProps)(DeckView)
