import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { green } from '../utils/_colors';

export default function TextButton( { children, onPress, background, disabled = false }) {
  // const { backgroundColor } = props;
 
  return (
    <Touchable  onPress={onPress} style={{backgroundColor: background}} disabled={disabled}>
      <ButtonText>{children}</ButtonText>
    </Touchable>
  )
}
// style={{backgroundColor: backgroundColor}}

const Touchable = styled.TouchableOpacity`
  color: white;
  padding: 10px 15px;
  font-size: 24px; 
  margin-top: 20px;
  border-radius: 10;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
  text-align: center;

`;

