import { iProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const productDetailPropsInitialState: iProduct = {
  asset: "",
  location: "",
  name: "",
  price: "",
  seller: "",
  title: "",
};

const initialState = {
  eventDetailForm: {
    open: false,
    props: {
      eventId: "",
    },
  },
  productDetail: {
    open: false,
    props: productDetailPropsInitialState,
    selectedVariant: "",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEventModal: (state, action) => {
      state.eventDetailForm = {
        open: true,
        props: {
          eventId: action.payload,
        },
      };
    },
    closeEventModal: (state) => {
      state.eventDetailForm = {
        open: false,
        props: {
          eventId: "",
        },
      };
    },
    openProductDetailModal: (state, action: PayloadAction<iProduct>) => {
      state.productDetail = {
        open: true,
        props: action.payload,
        selectedVariant: "a",
      };
    },
    closeProductDetailModal: (state) => {
      state.productDetail = initialState.productDetail;
    },
    setVariantProductDetailModal: (state, action) => {
      state.productDetail.selectedVariant = action.payload;
    },
  },
});

export const {
  closeEventModal,
  openEventModal,
  openProductDetailModal,
  closeProductDetailModal,
  setVariantProductDetailModal,
} = modalSlice.actions;

export default modalSlice.reducer;
