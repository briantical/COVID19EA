import { SET_COUNTRY_TWEETS } from "./../constants/action-types";

const tweets = (state = [], action) => {
  switch (action.type) {
    case SET_COUNTRY_TWEETS:
      return action.payload;

    default:
      return state;
  }
};

export default tweets;
