import { iProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type iSelectedProduct = {
  product: iProduct;
  variant: string;
  qty: number;
};

type iPersonalInfo = {
  name: string;
  phone: string;
};

type iAddress = {
  province: string;
  city: string;
  district: string;
  subdistrict: string;
  postalCode: string;
  detail: string;
};

const personalInformation: iPersonalInfo = {
  name: "",
  phone: "",
};

const address: iAddress = {
  province: "",
  city: "",
  district: "",
  subdistrict: "",
  postalCode: "",
  detail: "",
};

const selectedProducts: Array<iSelectedProduct> = [];
const initialState = {
  name: "",
  date: "",
  selectedProducts,
  selectedDesign: "",
  personalInformation,
  address,
  greeting: "",
  picture: "",
};

export const registrySlice = createSlice({
  name: "registry-creation",
  initialState,
  reducers: {
    setRegistryNameAndDate: (state, action) => {
      const { date, name } = action.payload;
      Object.assign(state, { date, name });
    },
    pushProductRegistry: (state, action: PayloadAction<iSelectedProduct>) => {
      void state.selectedProducts.push(action.payload);
    },
    removeProductFromCartRegistry: (state, action) => {
      const newCart = state.selectedProducts.filter(
        (product) => product.product.name !== action.payload
      );
      state.selectedProducts = newCart;
    },
    increaseQtyProductCartRegistry: (state, action) => {
      const productIdx = state.selectedProducts.findIndex(
        (product) => product.product.name === action.payload
      );
      state.selectedProducts[productIdx].qty++;
    },
    decreaseQtyProductCartRegistry: (state, action) => {
      const productIdx = state.selectedProducts.findIndex(
        (product) => product.product.name === action.payload
      );
      state.selectedProducts[productIdx].qty--;
    },
    setSelectedDesign: (state, action) => {
      state.selectedDesign = action.payload;
    },
    setRegistryPersonalInfo: (state, action: PayloadAction<iPersonalInfo>) => {
      state.personalInformation = action.payload;
    },
    setRegistryAddress: (state, action: PayloadAction<iAddress>) => {
      state.address = action.payload;
    },
    setRegistryGreeting: (state, action) => {
      state.greeting = action.payload;
    },
    setRegistryPicture: (state, action) => {
      state.picture = action.payload;
    },
  },
});

export const {
  setRegistryNameAndDate,
  pushProductRegistry,
  removeProductFromCartRegistry,
  increaseQtyProductCartRegistry,
  decreaseQtyProductCartRegistry,
  setRegistryPersonalInfo,
  setRegistryAddress,
  setRegistryGreeting,
  setRegistryPicture,
  setSelectedDesign,
} = registrySlice.actions;

export default registrySlice.reducer;
