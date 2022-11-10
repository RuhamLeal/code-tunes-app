import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import albumReducer from './albumReducer.js';
import loginReducer from './loginReducer.js';
import registrationReducer from './registrationReducer.js';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  searchReducer,
  albumReducer,
});

export default rootReducer;
