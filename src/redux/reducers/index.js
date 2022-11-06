import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';

const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
