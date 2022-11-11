import { GET_USER } from '../actions/types.js';

const INITIAL_STATE = {
  userData: null,
};

function profileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER: return {
      ...state,
      userData: action.payload.userData,
    };
    default: return state;
  }
}

export default profileReducer;
