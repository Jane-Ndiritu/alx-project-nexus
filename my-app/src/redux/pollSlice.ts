import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PollState {
  question: string;
  options: string[];
  votes: number[];
}

const initialState: PollState = {
  question: "",
  options: [],
  votes: [],
};

const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {
    setPoll: (state, action: PayloadAction<PollState>) => action.payload,
  },
});

export const { setPoll } = pollSlice.actions;
export default pollSlice.reducer;
