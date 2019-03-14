import React, { Component } from 'react'
import {
    Text, 
    View, 
    TextInput,
    KeyboardAvoidingView
  } from 'react-native'
import styled from 'styled-components/native';
import { green, blue } from '../utils/_colors';
import TextButton from './TextButton';


export default class AddDeck extends Component {
  state={
    input : ''
  }
  handleOnChange = (input) => {
    this.setState(() => ({
      input 
    }))
  }

  handleSubmit = () => {
    console.log('submitted');
    // add deck in redux
    // add deck to AsyncStorage
    // navigate to homepage/decklist
  }
  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <DeckInput
          placeholder="Add Deck Title"
          value={input}
          onChangeText={this.handleOnChange}
          multiline='true'
        />
        
        <TextButton onPress={this.handleSubmit} background={green} disabled={this.state.input.length < 1}>Submit</TextButton>
      </KeyboardAvoidingView>
    )
  }
}

const DeckInput = styled.TextInput`
  font-size: 24px;
  border: 3px solid #eee;
  padding: 10px 15px;
  text-align: center;
  min-width: 80%;
`;


