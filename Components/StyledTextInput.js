import React, { Component } from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import styled  from 'styled-components';
import { green } from '../utils/_colors';

export default function StyledTextInput () {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  )
}

const Input = styled.TextInput`
  border: 3px solid gray;
  font-size: 24;
  padding: 15px;
  border-radius: 10px;
  min-width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
`;