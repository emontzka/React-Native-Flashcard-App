import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

class Deck extends Component {
  render() {
    return (
      <View style={styles.deck}>
      <Text style={styles.deckTitle} >{this.props.title}</Text>
      <Text style={{textAlign: 'center'}}>{this.props.cards} cards</Text>
      </View>

      
    );
  }
}

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Deck  title='Deck One' cards='3' />
        <Deck  title='Deck Two' cards='4' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  },
  deckTitle: {
    fontSize: 24,
    color: 'blue'
  }
});

