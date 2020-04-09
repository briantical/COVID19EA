import { combineReducers } from "redux";

import error from "./error";
import report from "./report";
import reports from "./reports";
import typing from "./typing";
import tweets from "./tweets";
import suggestions from "./suggestions";

export default combineReducers({
  error,
  typing,
  report,
  reports,
  suggestions,
  tweets,
});
