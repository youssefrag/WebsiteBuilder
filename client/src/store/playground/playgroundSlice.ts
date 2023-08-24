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
    resetPlayground: (state) => {
      state.playground = [];
    },
    setPlayground: (state, action: PayloadAction<Component[]>) => {
      state.playground = action.payload;
    },
    deleteComponent: (state, action: PayloadAction<string>) => {
      state.playground = state.playground.filter(
        (component) => component.componentId !== action.payload
      );
    },
  },
});

export const { addComponent, deleteComponent, resetPlayground, setPlayground } =
  playgroundSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectPlayground = (state: RootState) =>
  state.playground.playground;

export default playgroundSlice.reducer;
