import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import AddDeck from './Components/AddDeck';
import AddCard from './Components/AddCard';

const Tabs = createAppContainer(createBottomTabNavigator({
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'purple',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}))

const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  }
}))

class Deck extends Component {
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
        {/* <Deck  title='Deck One' cards='3' /> */}
   
        {/* <AddDeck /> */}
        {/* <MainNavigator /> */}
        <AddCard />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
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

