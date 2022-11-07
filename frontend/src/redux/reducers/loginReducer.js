import { LOG_USER, CLEAN_LOG_USER } from '../actions/types.js';

const INITIAL_STATE = {
  logMessage: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_USER: return {
      ...state,
      logMessage: action.payload.logMessage,
    };
    case CLEAN_LOG_USER: return {
      ...INITIAL_STATE,
    };
    default: return state;
  }
}

export default loginReducer;
