import { QUIZ_TAKEN } from '../actions/index';

export default function lastQuizTaken ( state = {}, action) {
  switch (action.type) {
    case QUIZ_TAKEN :
      return {
        ...state,
        ...action.timestamp
        }
      default :
      return state
  }
}