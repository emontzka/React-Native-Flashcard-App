export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'


export function incrementCounter () {
  return {
    type: INCREMENT_COUNTER
  }
  
}

export function resetCounter () {
  return {
    type: RESET_COUNTER
  }
  
}