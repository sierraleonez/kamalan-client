import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    eventDetailForm: {
      open: false,
      props: {
        eventId: "",
      },
    },
  },
  reducers: {
    openEventModal: (state, action) => {
      return {
        eventDetailForm: {
          open: true,
          props: {
            eventId: action.payload,
          },
        },
      };
    },
    closeEventModal: state => {
      return {
        eventDetailForm: {
          open: false,
          props: {
            eventId: "",
          },
        },
      };
    },
  },
});

export const { closeEventModal, openEventModal } = modalSlice.actions;

export default modalSlice.reducer;
