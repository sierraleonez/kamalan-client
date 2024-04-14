import { iModalReducerInitialState, iProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const productDetailPropsInitialState: iProduct = {
  thumbnail_url: "",
  location: "",
  name: "",
  default_price: 0,
  brand_name: "",
  brand_id: "",
  description: "",
  id: ""
};

const initialState: iModalReducerInitialState = {
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
  login: {
    open: false,
  },
  register: {
    open: false,
  }
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
    openProductDetailModal: (state, action: PayloadAction<{product: iProduct; variant: string}>) => {
      state.productDetail = {
        open: true,
        props: action.payload.product,
        selectedVariant: action.payload.variant
      };
    },
    closeProductDetailModal: (state) => {
      state.productDetail = initialState.productDetail;
    },
    setVariantProductDetailModal: (state, action) => {
      state.productDetail.selectedVariant = action.payload;
    },
    openLoginModal: (state) => {
      state.login.open = true;
    },
    closeLoginModal: (state) => {
      state.login.open = false;
    },
    openRegisterModal: (state) => {
      state.register.open = true;
    },
    closeRegisterModal: (state) => {
      state.register.open = false;
    }
  },
});

export const {
  closeEventModal,
  openEventModal,
  openProductDetailModal,
  closeProductDetailModal,
  setVariantProductDetailModal,
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal
} = modalSlice.actions;

export default modalSlice.reducer;
