import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {}

const initialState: initialStateTypes = {};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
