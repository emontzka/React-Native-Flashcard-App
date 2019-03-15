import React, { Component } from 'react'
import {
    KeyboardAvoidingView
  } from 'react-native'
import styled from 'styled-components/native';
import { green, blue } from '../utils/_colors';
import TextButton from './TextButton';
import StyledTextInput from './StyledTextInput';


export default class AddDeck extends Component {
  state={
    input : ''
  }

  handleSubmit = () => {
    console.log('submitted');
    // add deck in redux
    // add deck to AsyncStorage
    // navigate to DeckView of new deck
  }
  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <StyledTextInput placeholder={'Add Deck Title'} onChangeText={(text) => this.setState({input})} />
        <TextButton onPress={this.handleSubmit} background={green}>Submit</TextButton>
      </KeyboardAvoidingView>
    )
  }
}




