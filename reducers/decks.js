import { ADD_DECK, ADD_QUESTION, RECEIVE_DECKS } from '../actions/index';

export default function decks ( state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      const { id, title} = action
      return {
        ...state,
          [id] : {
            ...state[id],
            title: title,
            questions: []
          }
        }
    case ADD_QUESTION :
        const {  deck, question, answer } = action
        return {
          ...state,
            [deck] : {
              ...state[deck],
              questions: [
                ...state[deck].questions,
                  {
                    question: question,
                    answer: answer
                  }
                ]
              }
            }
      default :
      return state
  }
}