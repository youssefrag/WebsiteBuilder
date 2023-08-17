import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Heading, Text, Image, CanvasSliceState } from "./canvas.types";

import { store } from "../store";

const initialState: CanvasSliceState = {
  canvas: null,
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    editCanvas: (state, action: PayloadAction<Heading | Text | Image>) => {
      state.canvas = action.payload;
    },
  },
});

export const { editCanvas } = canvasSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectCanvas = (state: RootState) => state.canvas.canvas;

export default canvasSlice.reducer;
