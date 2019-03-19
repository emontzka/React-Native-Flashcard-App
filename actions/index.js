export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CORRECT_ANSWERS = 'CORRECT_ANSWERS'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (id, title) {
  return {
    type: ADD_DECK,
    id,
    title
  }
}

export function addQuestion (deck, question, answer) {
  return {
    type: ADD_QUESTION,
    deck,
    question,
    answer
  }
}

export function correctAnswers (correct) {
  return {
    type: CORRECT_ANSWERS,
    correct
  }
}

