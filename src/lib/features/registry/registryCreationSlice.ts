import { iRegistry, iRegistryCartItem } from "@/lib/services/type";
import { iAddress, iPersonalInfo, iProduct, iRegistryCreationReducerInitialState, iSelectedProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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


const selectedProducts: Array<iRegistryCartItem> = [];
const initialState: iRegistryCreationReducerInitialState = {
  name: "",
  // date: "",
  selectedProducts,
  // selectedDesign: "",
  personalInformation,
  address,
  // greeting: "",
  // picture: "",
  registry: {
    event_date: "",
    id: "",
    is_private: false,
    is_published: false,
    name: "",
    user_id: "",
    design_id: "",
    message: "",
    user_asset_url: ""
  }
};

export const registrySlice = createSlice({
  name: "registry-creation",
  initialState,
  reducers: {
    setRegistryNameAndDate: (state, action) => {
      const { date, name } = action.payload;
      Object.assign(state, { date, name });
    },
    // pushProductRegistry: (state, action: PayloadAction<iRegistryCartItem>) => {
    //   const sameProductIdx = state.selectedProducts.findIndex(product => {
    //     const productTitle = product.name
    //     const productVariant = product.product_variation_id
    //     if (productTitle === action.payload.product.name && productVariant === action.payload.variant) {
    //       return product
    //     }
    //   })
    //   if (sameProductIdx === -1) {
    //     state.selectedProducts.push(action.payload);
    //   } else {
    //     state.selectedProducts[sameProductIdx].qty++
    //   }
    // },
    // removeProductFromCartRegistry: (state, action) => {
    //   const newCart = state.selectedProducts.filter(
    //     (product) => product.product.name !== action.payload
    //   );
    //   state.selectedProducts = newCart; 
    // },
    // increaseQtyProductCartRegistry: (state, action) => {
    //   const productIdx = state.selectedProducts.findIndex(
    //     (product) => product.product.name === action.payload
    //   );
    //   state.selectedProducts[productIdx].qty++;
    // },
    // decreaseQtyProductCartRegistry: (state, action) => {
    //   const productIdx = state.selectedProducts.findIndex(
    //     (product) => product.product.name === action.payload
    //   );
    //   state.selectedProducts[productIdx].qty--;
    // },
    setSelectedDesign: (state, action) => {
      state.registry.design_id = action.payload;
    },
    setRegistryPersonalInfo: (state, action: PayloadAction<iPersonalInfo>) => {
      state.personalInformation = action.payload;
    },
    setRegistryAddress: (state, action: PayloadAction<iAddress>) => {
      state.address = action.payload;
    },
    setRegistryGreeting: (state, action) => {
      state.registry.message = action.payload;
    },
    setRegistryPicture: (state, action) => {
      state.registry.user_asset_url = action.payload;
    },
    setRegistryDetailFromAPI: (state, action: PayloadAction<iRegistry>) => {
      state.registry = action.payload
    },
    setRegistryProductsFromAPI: (state, action: PayloadAction<Array<iRegistryCartItem>>) => {
      state.selectedProducts = action.payload
    }
  },
});

export const {
  setRegistryNameAndDate,
  // pushProductRegistry,
  // removeProductFromCartRegistry,
  // increaseQtyProductCartRegistry,
  // decreaseQtyProductCartRegistry,
  setRegistryPersonalInfo,
  setRegistryAddress,
  setRegistryGreeting,
  setRegistryPicture,
  setSelectedDesign,
  setRegistryDetailFromAPI
} = registrySlice.actions;

export default registrySlice.reducer;
