import React, { Component } from 'react'
import {  View,  KeyboardAvoidingView, TextInput, Text} from 'react-native'
import TextButton from './TextButton';
import { green, purple } from '../utils/_colors';
import StyledTextInput from './StyledTextInput';
import { connect } from 'react-redux';
import { addQuestion } from '../actions/index';
import { addCardSync } from '../utils/api';



class AddCard extends Component {
  state={
    question: '',
    answer: ''
  }

  static navigationOptions = {
    title: 'Add Card',
  };
  
  handleSubmit = (deck, question, answer) => {
    
    //redux
    console.log('in add card: ', deck, question, answer)
    const {dispatch, decks} = this.props
    dispatch(addQuestion(deck, question, answer))
    console.log(`decks is ${JSON.stringify(this.props.decks[deck])}`)
    // addCardSync(decks[deck],deck, question, answer)
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
        <Text style={{fontSize: 24}}>Deck is {deck}</Text>
          <TextInput style={{padding: 10, fontSize: 24}} value={this.state.question} placeholder={'Enter your question'} onChangeText={(question) => this.setState({question})} />
          <TextInput style={{padding: 10, fontSize: 24}} value={answer}  placeholder={'Enter your answer'} onChangeText={(answer) => this.setState({answer})} />
          <TextButton onPress={(e) => this.handleSubmit(deck, question, answer)} background={green}>Submit</TextButton>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddCard)


