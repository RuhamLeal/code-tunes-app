import { REGISTER_USER, CLEAN_REGISTERED_USER } from '../actions/types.js';

const INITIAL_STATE = {
  registerMessage: '',
};

function registrationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_USER: return {
      ...state,
      registerMessage: action.payload.registerMessage,
    };
    case CLEAN_REGISTERED_USER: return {
      ...INITIAL_STATE,
    };
    default: return state;
  }
}

export default registrationReducer;
