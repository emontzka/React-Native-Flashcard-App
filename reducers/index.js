import { combineReducers } from 'redux'
import decks from './decks';
import lastQuizTaken from './lastQuizTaken';
import correctAnswers from './correctAnswers';

export default combineReducers({
  decks,
  lastQuizTaken,
  correctAnswers
})
