import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CardBack from './CardBack';
import CardFront from './CardFront';
import QuizResults from './QuizResults';

export default class CardView extends Component {
  render() {
    return (
      <View>
        <CardFront />
        <CardBack />
        <QuizResults />
      </View>
    )
  }
}
