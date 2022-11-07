import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import albumReducer from './albumReducer.js';
import loginReducer from './loginReducer.js';

const rootReducer = combineReducers({
  loginReducer,
  searchReducer,
  albumReducer,
});

export default rootReducer;
