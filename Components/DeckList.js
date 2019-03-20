import React, { Component, Fragment } from 'react'
import {
   Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    AsyncStorage
  } from 'react-native'
import { StackNavigator } from 'react-navigation'
import DeckView from './DeckView';
import AddCard from './AddCard';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { fetchDecks, APP_STORAGE_KEY } from '../utils/api';
import { receiveDecks } from '../actions/index';
import { AppLoading } from 'expo'
import DeckItem from './DeckItem';
import styled from 'styled-components'



class Decklist extends React.Component{

  state={ready: false}

  componentDidMount () {
    fetchDecks()
    .then((res)=> this.props.dispatch(receiveDecks(res)))
    .then(this.setState({ready: true}))
  }
  static navigationOptions = {
    title: 'Home',
  };
  goToDeck = (deck, title, e) => {
    this.props.navigation.navigate('DeckView', {
      deck,
      title
    })
  }
  addNewDeck = () => {
    this.props.navigation.navigate('AddDeck')
  }



  render () {
    const { deckArray, decks } = this.props
    const { ready } = this.state
    if ( ready === false) {
      return <AppLoading />
    }
    return (
      <ScrollView>
        <AddDeckBtn onPress={this.addNewDeck}><AddDeckBtnText>+ Add Deck +</AddDeckBtnText></AddDeckBtn>
        {deckArray.map(deck => {
          const cardsLength = decks[deck].questions.length === undefined ? 0 : decks[deck].questions.length ;
          const title = decks[deck].title;
          return (
            <DeckItem key={deck} title={title} cardsLength={cardsLength} callBackFunc={(e) => this.goToDeck(deck, title, e)} />
          )
        })}
        
      </ScrollView>
      
    )
  }
}

const AddDeckBtn = styled.TouchableOpacity`
  padding: 15px;
  text-align: center;
  font-size: 20px;
`;

const AddDeckBtnText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

function mapStateToProps({decks}) {
  const deckArray = Object.keys(decks);
  return {
    decks,
    deckArray
  }
}

export default connect(mapStateToProps)(Decklist);
