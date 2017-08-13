import { createStore, combineReducers } from 'redux';

import currentMatch from './reducers/currentMatch';
import totalScore from './reducers/totalScore';

const reducer = combineReducers({
  currentMatch,
  totalScore,
});


const store = createStore(reducer)

export default store

