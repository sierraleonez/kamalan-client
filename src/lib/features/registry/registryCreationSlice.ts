import { iProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type iSelectedProduct = {
  product: iProduct;
  variant: string;
  qty: number;
};
const selectedProducts: Array<iSelectedProduct> = [];
const initialState = {
  name: "",
  date: "",
  selectedProducts,
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
  },
});

export const { setRegistryNameAndDate, pushProductRegistry, removeProductFromCartRegistry } =
  registrySlice.actions;

export default registrySlice.reducer;
