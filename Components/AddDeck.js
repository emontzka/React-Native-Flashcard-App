import React, { Component } from 'react'
import {
    KeyboardAvoidingView
  } from 'react-native'
import styled from 'styled-components/native';
import { green, blue } from '../utils/_colors';
import TextButton from './TextButton';
import StyledTextInput from './StyledTextInput';
import { connect } from 'react-redux';
import {addDeck} from '../actions'



class AddDeck extends Component {

  state = { input: ''}
  handleSubmit = () => {
    // add deck in redux
    const space = /\s/g;
    const title = this.state.input;
    const id = title.toLowerCase().replace(space,'_');
    console.log(id);
    this.props.dispatch(addDeck(id, title))
    // add deck to AsyncStorage
    // navigate to DeckView of new deck
  }
  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <StyledTextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         placeholder={'Add Deck Title'} 
         onChangeText={(input) => this.setState({input})} 
         value={this.state.input}/>
        <TextButton onPress={this.handleSubmit} background={green}>Submit</TextButton>
      </KeyboardAvoidingView>
    )
  }
}


export default connect()(AddDeck)




