import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Component, PlaygroundSliceState } from "./playground.types";

import { store } from "../store";

const initialState: PlaygroundSliceState = {
  playground: [],
};

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<Component>) => {
      state.playground = [...state.playground, action.payload];
    },
  },
});

export const { addComponent } = playgroundSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectPlayground = (state: RootState) =>
  state.playground.playground;

export default playgroundSlice.reducer;
