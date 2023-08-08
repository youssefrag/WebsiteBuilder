import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserSliceState } from "./user.types";

import { store } from "../store";

const initialState: UserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      if (state !== null) {
        console.log(state);
        state.user = action.payload;
      }
      console.log("State is null");
    },
    logoutUser: (state) => {
      if (state !== null) {
        state.user = null;
      }
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
