import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/lib/features/global/modalSlice";
import registryCreationReducer from "./features/registry/registryCreationSlice";
import { EventApi } from "./services/events";
import { RegistriesApi } from "./services/registries";
import { UsersApi } from "./services/users";
import authSlice from "./features/global/authSlice";
import toastSlice from "./features/global/toastSlice";
import { persistReducer } from 'redux-persist';
import { encryptTransform } from "redux-persist-transform-encrypt";
import { iAuthReducerInitialState, iRegistryCreationReducerInitialState } from "@/types";
import modalSlice from "@/lib/features/global/modalSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { ProductApi } from "./services/products";
import { rtkQueryErrorLogger } from "./middleware/errorHandler";
import { DesignApi } from "./services/design";
import { RegionApi } from "./services/master/region";

const key_encrypt = process.env.NEXT_PUBLIC_APP_ENCRYPT_KEY || '';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: [],
  transforms: [encryptTransform({ secretKey: key_encrypt })],
}

const registryCreationPersistConfig = {
  key: 'registryCreation',
  storage,
  blacklist: [],
  transforms: [encryptTransform({ secretKey: key_encrypt })],
}

const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: persistReducer<iAuthReducerInitialState>(authPersistConfig, authSlice),
    toast: toastSlice,
    registryCreation: persistReducer<iRegistryCreationReducerInitialState>(registryCreationPersistConfig, registryCreationReducer),
    [EventApi.reducerPath]: EventApi.reducer,
    [RegistriesApi.reducerPath]: RegistriesApi.reducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [DesignApi.reducerPath]: DesignApi.reducer,
    [RegionApi.reducerPath]: RegionApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      EventApi.middleware,
      RegistriesApi.middleware,
      UsersApi.middleware,
      ProductApi.middleware,
      DesignApi.middleware,
      RegionApi.middleware,
      rtkQueryErrorLogger
    ),
});

export const makeStore = () => {
  return store
};

export const persistor = persistStore(store)
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
