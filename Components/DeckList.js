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

class Decks extends Component {
  render() {
    return (
      <View>
        <Text style={{height: 50}}>Text below scroll view.</Text>
        
      <ScrollView>
        <DeckItem  title={'Deck One'} cards={3} />
        <DeckItem  title='Deck One' cards='3' />
        <DeckItem  title='Deck One' cards='3' />
        <DeckItem  title='Deck One' cards='3' />
        <DeckItem  title={'Deck Three'} cards={3} />
        <DeckItem  title='Deck One' cards='3' />
        <DeckItem  title='Deck One' cards='3' />
        <DeckItem  title='Deck One' cards='3' />
      </ScrollView>
      <Text style={{height: 50}}>Text below scroll view.</Text>
      </View>
    )
  }
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
  goToDeck = () => {
    this.props.navigation.navigate('DeckView')
  }
  addNewDeck = () => {
    this.props.navigation.navigate('AddDeck')
  }
  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.addNewDeck}><Text>Add Deck</Text></TouchableOpacity>
        <DeckItem  title='Deck One' cards='3' nav={this.goToDeck} />
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

export default Decklist;
