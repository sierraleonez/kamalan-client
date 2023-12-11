import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/lib/features/global/modalSlice";
import registryCreationReducer from "./features/registry/registryCreationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      registryCreation: registryCreationReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
