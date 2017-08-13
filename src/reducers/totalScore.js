// INITIAL STATE

const initialState = {
  round: 0,
  playerScore: 0,
  compScore: 0
}

// ACTION TYPES
export const UPDATE_SCORE = 'UPDATE_SCORE'

// ACTIONS
export const updateScore = (score) => {
  return {
    type: UPDATE_SCORE,
    round: score.round,
    playerScore: score.playerScore,
    compScore: score.compScore

  }
}

// REDUCER
const totalScore = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        round: action.round,
        playerScore: action.playerScore,
        compScore: action.compScore
      }
    default:
      return state
  }
}

export default totalScore;

