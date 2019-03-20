import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    AsyncStorage
  } from 'react-native'
import styled from 'styled-components/native';
import { NavigationActions} from 'react-navigation'
import { green, blue } from '../utils/_colors';
import TextButton from './TextButton';
import StyledTextInput from './StyledTextInput';
import { connect } from 'react-redux';
import { addDeck} from '../actions'
import { addDeckAsync, APP_STORAGE_KEY } from '../utils/api';




class AddDeck extends Component {

  state = { input: ''}
  handleAddDeck = () => {
    const {dispatch} = this.props
    const space = /\s/g;
    const title = this.state.input;
    const deckId = title.toLowerCase().replace(space,'_');
    dispatch(addDeck(deckId, title))
  }
  
  handleSubmit = () => {
    // add deck in redux
    const {dispatch, navigation} = this.props
    const space = /\s/g;
    const title = this.state.input;
    const deck = title.toLowerCase().replace(space,'_');
    const cardsLength = 0
    dispatch(addDeck(deck, title));
    navigation.navigate('DeckView', {
      deck,
      cardsLength,
      title
    })

    // addDeckAsync(deckId, title)
    // AsyncStorage.mergeItem(APP_STORAGE_KEY, JSON.stringify({deckId: {title: title, questions: []}}))
    
    // add deck to AsyncStorage
    // navigate to DeckView of new deck
  }
  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
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




