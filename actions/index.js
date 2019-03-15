export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

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