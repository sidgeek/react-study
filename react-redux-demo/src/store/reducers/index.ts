import { combineReducers } from "redux";

import { sessionReducer } from "./session";
import { globalStatusReducer } from "./global-status";

export default combineReducers({
  session: sessionReducer,
  globalStatus: globalStatusReducer,
});
