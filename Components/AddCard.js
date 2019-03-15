import React, { Component } from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, Keyboard} from 'react-native'
import styled  from 'styled-components';
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
  }

  render() {
    const {question, answer} = this.state;
    return (
      <Container>
      

        
        <KeyboardAvoidingView  behavior='padding'>

          <StyledTextInput placeholder={'Enter your question'} onChangeText={(text) => this.setState({question})} />

          <StyledTextInput placeholder={'Enter your answer'} onChangeText={(text) => this.setState({answer})} />

        </KeyboardAvoidingView>
        
        <TextButton onPress={this.handleSubmit} background={green}>Submit</TextButton>
       

      </Container>
    )
  }
}

const Container = styled.View`


`;

// display: flex;
// alignSelf: stretch;
// height: 100%;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
