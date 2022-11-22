import {
  GET_USER, UPDATE_USER, CLEAN_UPDATED_USER, TOKEN_ERROR,
} from '../actions/types.js';

const INITIAL_STATE = {
  userData: null,
  editResponse: '',
  authorized: true,
};

function profileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER: return {
      ...state,
      userData: action.payload.userData,
    };
    case UPDATE_USER: return {
      ...state,
      editResponse: action.payload.editResponse,
    };
    case CLEAN_UPDATED_USER: return {
      ...state,
      editResponse: '',
    };
    case TOKEN_ERROR: return {
      ...state,
      authorized: false,
    };
    default: return state;
  }
}

export default profileReducer;
