import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import TextButton from './TextButton';
import { purple, green } from '../utils/_colors';
import { connect } from 'react-redux';

class DeckView extends Component {

  addCard = () => {
    this.props.navigation.navigate('AddCard', {
      deck
    })
  }

  startQuiz = () => {
    console.log('start quiz');
    this.props.navigation.navigate('CardView')
  }

  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam('deck');
    const cardsLength = navigation.getParam('cardsLength');
    const title = navigation.getParam('title');
    return (
      <View style={{flex: 1}}>
        <Text>{title}</Text>
        <Text> {cardsLength} cards</Text>
        <KeyboardAvoidingView>
          <TextButton background={purple} onPress={this.addCard(deck)}>Add Card</TextButton>
          <TextButton background={green} onPress={this.startQuiz}>Start Quiz</TextButton>
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
