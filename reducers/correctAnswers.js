
import { INCREMENT_COUNTER, RESET_COUNTER } from '../actions/counter';
const initialState = {count: 0}

export default function correctAnswers ( state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER :
      return {
        ...state,
        count: state.count + 1
      }
    case RESET_COUNTER :
      return {
        ...state,
        ...initialState
      }
      default :
      return state
  }
}