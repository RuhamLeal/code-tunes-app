import { LOG_USER } from '../actions/types.js';

const INITIAL_STATE = {
  logMessage: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_USER: return {
      ...state,
      logMessage: action.payload.logMessage,
    };
    default: return state;
  }
}

export default loginReducer;
