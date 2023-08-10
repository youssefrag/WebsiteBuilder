import { combineReducers } from "redux";

import canvasReducer from "./canvas/canvasSlice";

import userReducer from "./user/userSlice";

export const rootReducer = combineReducers({
  canvas: canvasReducer,
  user: userReducer,
});
