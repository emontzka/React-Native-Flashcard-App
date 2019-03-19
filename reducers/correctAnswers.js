import { CORRECT_ANSWERS } from '../actions/index';

export default function correctAnswers ( state = 0, action) {
  switch (action.type) {
    case CORRECT_ANSWERS :
      return {
        count: state + 1
      }
      default :
      return state
  }
}