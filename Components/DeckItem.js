import React, { Fragment } from 'react'
import {
  Text,
  View,
   TouchableOpacity
 } from 'react-native'
import  styled  from 'styled-components';

export default function DeckItem({ title, cardsLength, callBackFunc }) {
  return (
    <DeckContainer>
      <TouchableOpacity onPress={callBackFunc} >
        <Fragment>
          <DeckTitle>{title}</DeckTitle>
          <Text style={{ textAlign: 'center' }}>{cardsLength} cards</Text>
        </Fragment>
      </TouchableOpacity>
    </DeckContainer>
  )
}

const DeckContainer = styled.View`
  border: 1px solid black;
  padding: 30px 10px;
  width: 100%;
  textAlign: center;
`;

const DeckTitle = styled.Text`
  font-size: 24px;
  text-align: center;
`;

