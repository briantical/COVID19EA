import { SET_TYPING_SUGGESTIONS } from '../constants/action-types';

const suggestions = (state = [], action) => {
  switch (action.type) {
    case SET_TYPING_SUGGESTIONS:
      return action.payload;

    default:
      return state;
  }
};

export default suggestions;
