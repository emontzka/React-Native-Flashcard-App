import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import TextButton from './TextButton';
import { purple, green } from '../utils/_colors';
import { connect } from 'react-redux';

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
    console.log('start quiz');
    this.props.navigation.navigate('CardView', {
      deck,
      cardsLength,
      currentCard: 0,
      correct: 0
    })
  }

  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam('deck');
    const cardsLength = navigation.getParam('cardsLength');
    const title = navigation.getParam('title');
    const hasCards = cardsLength > 0;

    return (
      <View style={{flex: 1}}>
        <Text>{title}</Text>
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

function mapStateToProps({navigation}) {
 
  return {
   
  }
}
export default connect(mapStateToProps)(DeckView)
