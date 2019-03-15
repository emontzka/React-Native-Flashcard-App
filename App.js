import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import DeckView from './components/DeckView';
import CardView from './components/CardView';
import DeckList from './components/DeckList';
import { purple, green } from './utils/_colors';
import QuizResults from './components/QuizResults';



const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: DeckList,
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  CardView: {
    screen: CardView
  },
  DeckView: {
    screen: DeckView
  },
  QuizResults: {
    screen: QuizResults
  }
  
}))

class DeckItem extends Component {
  render() {
    return (
      <View style={styles.deck}>
      
        <Text style={styles.deckTitle} >{this.props.title}</Text>
        <Text style={{ textAlign: 'center' }}>{this.props.cards} cards</Text>
      </View>
    );
  }
}


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        
   
        {/* <AddDeck /> */}
        <MainNavigator />
        {/* <AddCard /> */}
        {/* <DeckView /> */}
        {/* <CardView /> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  deck: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    width: '100%',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  deckTitle: {
    fontSize: 24,
    textAlign: 'center'
  }
});

