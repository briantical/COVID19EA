import {
  SET_TYPING_VALUE,
  SET_TYPING_SUGGESTIONS
} from "./../constants/action-types";

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const setTypingSuggestions = suggestions => ({
  type: SET_TYPING_SUGGESTIONS,
  payload: suggestions
});
