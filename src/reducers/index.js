import { combineReducers } from "redux";

import typing from "./typing";
import suggestions from "./suggestions";

export default combineReducers({ typing, suggestions });
