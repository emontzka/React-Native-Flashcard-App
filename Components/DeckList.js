import React, { Component, Fragment } from 'react'
import {
   Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Button
  } from 'react-native'
  import { StackNavigator } from 'react-navigation'
import DeckView from './DeckView';
import AddCard from './AddCard';
import TextButton from './TextButton';
import { connect } from 'react-redux';


const DeckItem = ({title, cards, nav}) => {
    return ( 
    <View style={styles.deck}>
    
      <TouchableOpacity onPress={nav}>
      <Fragment>
      <Text style={styles.deckTitle} >{title}</Text>
        <Text style={{ textAlign: 'center' }}>{cards} cards</Text>
      </Fragment>
       
      </TouchableOpacity>

    </View>
  );
 
}



class Decklist extends React.Component{
  static navigationOptions = {
    headerTitle: null,
    headerRight: (
      <Button
        onPress={() => this.addNewDeck}
        title="Button title"
        color="#000"
      />
    ),
  };
  goToDeck = (deck, cardsLength, title) => {
    this.props.navigation.navigate('DeckView', {
      deck,
      cardsLength,
      title
    })
  }
  addNewDeck = () => {
    this.props.navigation.navigate('AddDeck')
  }
  render () {
    const { deckArray, decks } = this.props
    return (
      <View>
        <TouchableOpacity onPress={this.addNewDeck}><Text>Add Deck</Text></TouchableOpacity>
        {deckArray.map(deck => {
          const cardsLength = decks[deck].questions.length;
          const title = decks[deck].title;
          return (<DeckItem key={deck} title={title} cards={cardsLength} nav={this.goToDeck(deck, cardsLength, title)} />)
        })}

        
      </View>
      
    )
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
    // flex: 1,
    // flexDirection: 'column'
  },
  deckTitle: {
    fontSize: 24,
    textAlign: 'center'
  }
});

function mapStateToProps({decks}) {
  const deckArray = Object.keys(decks);
  return {
    decks,
    deckArray
  }
}

export default connect(mapStateToProps)(Decklist);
