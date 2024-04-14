import { iOpenToastArg, iToastReducerInitialState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: iToastReducerInitialState = {
  open: false,
  message: "",
  type: "info",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (_state, action: PayloadAction<iOpenToastArg>) => {
      return {
        ...action.payload,
        type: action.payload.type ?? _state.type,
        open: true,
      };
    },
    closeToast: (_state) => {
      return {
        ..._state,
        open: false
      };
    },
  },
});

export const { closeToast, openToast } = toastSlice.actions;

export default toastSlice.reducer;
