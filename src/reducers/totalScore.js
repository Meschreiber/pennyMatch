// INITIAL STATE
const initialState = {
  round: 1,
  playerScore: 0,
  compScore: 0
}

// ACTION TYPES
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const RESET_SCORE = 'RESET_SCORE'

// ACTIONS
export const updateScore = (score) => {
  return {
    type: UPDATE_SCORE,
    round: score.round,
    playerScore: score.playerScore,
    compScore: score.compScore

  }
};

export const resetScore = () => {
  return {
    type: RESET_SCORE
  }
};

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
    case RESET_SCORE:
      return {
        ...state,
        round: 1,
        playerScore: 0,
        compScore: 0
      }
    default:
      return state
  }
}

export default totalScore;

