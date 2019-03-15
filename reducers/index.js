import { combineReducers } from 'redux'
import decks from './decks';
import lastQuizTaken from './lastQuizTaken';

export default combineReducers({
  decks,
  lastQuizTaken
})
