import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import TextButton from './TextButton';
import { purple, green } from '../utils/_colors';

export default class DeckView extends Component {

  addCard = () => {
    console.log('navigate to add card');
    this.props.navigation.navigate('AddCard')
    
  }

  startQuiz = () => {
    console.log('start quiz');
    this.props.navigation.navigate('CardView')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> Deck Name</Text>
        <Text> 3 cards</Text>
        <KeyboardAvoidingView>
          <TextButton background={purple} onPress={this.addCard}>Add Card</TextButton>
          <TextButton background={green} onPress={this.startQuiz}>Start Quiz</TextButton>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
