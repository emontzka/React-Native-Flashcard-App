import React, { Component } from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import styled  from 'styled-components';
import { green } from '../utils/_colors';

export default function StyledTextInput ( { placeholder, onChangeText }) {
  return (
    <Input
    placeholder={placeholder}
    returnKeyType='done'
    autoFocus={true}
    multiline={true}
    editable={true}
    autoCorrect={false}
    onSubmitEditing={Keyboard.dismiss}
    onChangeText={ onChangeText }
      />
  )
}

const Input = styled.TextInput`
  border: 3px solid gray;
  font-size: 24;
  padding: 15px;
  border-radius: 10px;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
`;