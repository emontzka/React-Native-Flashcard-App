import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextButton from './TextButton';
import { green } from '../utils/_colors';

export default class QuizResults extends Component {
  startQuiz = () => {
    console.log('start quiz');
    // this.props.navigation.navigate('CardView')
  }
  render() {
    return (
      <View>
        <Text> You got 2 out of 3 correct.</Text>
        <TextButton background={green} onPress={this.startQuiz}>Start Quiz Again?</TextButton>
      </View>
    )
  }
}
