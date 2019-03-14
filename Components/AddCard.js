import React, { Component } from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, Keyboard} from 'react-native'
import styled  from 'styled-components';

import TextButton from './TextButton';
import { green } from '../utils/_colors';


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
          
            <TextInput
            style={{borderWidth: 3, borderColor: 'gray', fontSize: 24, padding: 15, borderRadius: 10, margin: 10, minWidth: 300}}
              placeholder="Enter your question"
              returnKeyType='done'
              autoFocus={true}
              multiline={false}
              editable={true}
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={(text) => this.setState({question})}
            />

            {/* {question.length > 0 && ( */}
              <TextInput
              style={{borderWidth: 3, borderColor: 'gray', fontSize: 24, padding: 15, borderRadius: 10, minWidth: 300, margin: 10}}
                placeholder="Enter your answer"
                returnKeyType='done'
                multiline={true}
                onSubmitEditing={Keyboard.dismiss}
                multiline={false}
                editable={true}
                onChangeText={(text) => this.setState({answer})}
              />  
            {/* // )}           */}
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
