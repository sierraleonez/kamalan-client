import { createSlice } from "@reduxjs/toolkit";

export const registrySlice = createSlice({
  name: "registry-creation",
  initialState: {
    name: "",
    date: "",
  },
  reducers: {
    setRegistryNameAndDate: (state, action) => {
      const { date, name } = action.payload;
      Object.assign(state, { date, name });
    },
  },
});

export const { setRegistryNameAndDate } = registrySlice.actions;

export default registrySlice.reducer;
