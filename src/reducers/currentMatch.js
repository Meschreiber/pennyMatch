// INITIAL STATE

const initialState = {
  hasSelected: 0,
  playerFlip: 0,
  compFlip: 0
};

// ACTION TYPES
export const UPDATE_MATCH = 'UPDATE_MATCH';
export const RESET_MATCH = 'RESET_MATCH';

// ACTIONS
export const updateMatch = (match) => {
  return {
    type: UPDATE_MATCH,
    playerFlip: match.playerFlip,
    compFlip: match.compFlip
  }
};

export const resetMatch = () => {
  return {
    type: RESET_MATCH
  }
};

// REDUCER
const currentMatch = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MATCH:
      return {
        ...state,
        hasSelected: 1,
        playerFlip: action.playerFlip,
        compFlip: action.compFlip
      };
    case RESET_MATCH:
      return {
        ...state,
        hasSelected: 0,
        playerFlip: 0,
        compFlip: 0
      };
    default:
      return state;
  }
}

export default currentMatch;
