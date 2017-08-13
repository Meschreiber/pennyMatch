// INITIAL STATE

const initialState = {
  playerFlip: 0,
  compFlip: 0
}

// ACTION TYPES
export const UPDATE_MATCH = 'UPDATE_MATCH'

// ACTIONS
export const updateMatch = (match) => {
  return {
    type: UPDATE_MATCH,
    playerFlip: match.playerFlip,
    compFlip: match.compFlip
  }
}

// REDUCER
const currentMatch = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MATCH:
      return {
        ...state,
        playerFlip: action.playerFlip,
        compFlip: action.compFlip
      }
    default:
      return state
  }
}

export default currentMatch;
