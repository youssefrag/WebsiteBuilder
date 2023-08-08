import { combineReducers } from "redux";

import userReducer from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
});
