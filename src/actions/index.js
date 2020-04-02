import { SET_TYPING_VALUE } from "./../constants/action-types";

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});
