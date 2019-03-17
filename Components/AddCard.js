import React, { Component } from 'react'
import {  View,  KeyboardAvoidingView} from 'react-native'
import TextButton from './TextButton';
import { green, purple } from '../utils/_colors';
import StyledTextInput from './StyledTextInput';
import { connect } from 'react-redux';

class AddCard extends Component {
  state={
    question: '',
    answer: ''
  }

  handleSubmit = (deck) => {
    console.log('add question submit');
    //redux
    const {question, answer} = this.state
    // const deck = this.props.navigation.getParam('deck');
    //AsyncStorage
    // reset state
    //navigate to Deck
  }

  render() {
    const {question, answer} = this.state;
    const deck = this.props.navigation.getParam('deck');
    return (
      <View>
        <KeyboardAvoidingView  behavior='padding'>
          <StyledTextInput placeholder={'Enter your question'} onChangeText={(text) => this.setState({question})} />
          <StyledTextInput placeholder={'Enter your answer'} onChangeText={(text) => this.setState({answer})} />
          <TextButton onPress={this.handleSubmit(deck)} background={green}>Submits</TextButton>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect()(AddCard)


