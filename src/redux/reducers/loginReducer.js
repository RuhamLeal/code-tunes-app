import GET_USERNAME from '../actions/types.js';

const INITIAL_STATE = {
  username: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERNAME: return {
      ...state,
      username: action.payload.username,
    };
    default: return state;
  }
}

export default loginReducer;
