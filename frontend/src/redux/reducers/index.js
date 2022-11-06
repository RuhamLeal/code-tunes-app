import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import albumReducer from './albumReducer.js';

const rootReducer = combineReducers({
  searchReducer,
  albumReducer,
});

export default rootReducer;
