import { SET_COUNTRY_REPORTS } from "../constants/action-types";

const reports = (state = [], action) => {
  switch (action.type) {
    case SET_COUNTRY_REPORTS:
      return action.payload;

    default:
      return state;
  }
};

export default reports;
