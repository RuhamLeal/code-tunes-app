import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import albumReducer from './albumReducer.js';
import loginReducer from './loginReducer.js';
import registrationReducer from './registrationReducer.js';
import profileReducer from './profileReducer.js';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  profileReducer,
  searchReducer,
  albumReducer,
});

export default rootReducer;
