import { SET_COUNTRY_REPORT } from "../constants/action-types";

const report = (state = {}, action) => {
  switch (action.type) {
    case SET_COUNTRY_REPORT:
      return action.payload;

    default:
      return state;
  }
};

export default report;
