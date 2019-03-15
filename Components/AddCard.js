import React, { Component } from 'react'
import {  View,  KeyboardAvoidingView} from 'react-native'
import TextButton from './TextButton';
import { green, purple } from '../utils/_colors';
import StyledTextInput from './StyledTextInput';

export default class AddCard extends Component {
  state={
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    console.log('add question submit');
    //redux
    //AsyncStorage
    // reset state
    //navigate to Deck
  }

  render() {
    const {question, answer} = this.state;
    return (
      <View>
        <KeyboardAvoidingView  behavior='padding'>
          <StyledTextInput placeholder={'Enter your question'} onChangeText={(text) => this.setState({question})} />
          <StyledTextInput placeholder={'Enter your answer'} onChangeText={(text) => this.setState({answer})} />
          <TextButton onPress={this.handleSubmit} background={green}>Submit</TextButton>
        </KeyboardAvoidingView>
      </View>
    )
  }
}


