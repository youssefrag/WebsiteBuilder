import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserSliceState } from "./user.types";

import store from "../store";

const initialState: UserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
