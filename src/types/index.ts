import { iRegistry, iRegistryCartItem } from "@/lib/services/type";
import { StaticImageData } from "next/image";

export type textVariant = "copy" | "title";
export type textSize =
  | "giant"
  | "macro"
  | "large"
  | "big"
  | "small"
  | "tiny"
  | "medium"
  | "micro";

export type iFontSize = { [key in textVariant]: { [key in textSize]: string } };

export type iProduct = {
  id: string;
  name: string;
  thumbnail_url: StaticImageData | string;
  description: string;
  default_price: number;
  brand_name: string;
  brand_id: string;
  location: string;
};

export interface iModalReducerInitialState {
  eventDetailForm: {
    open: boolean;
    props: {
      eventId: string
    }
  }
  productDetail: {
    open: boolean;
    props: iProduct;
    selectedVariant: string;
  }
  login: {
    open: boolean;
  }
  register: {
    open: boolean;
  }
}

export type toastDisplayType = "success" | "error" | "warning" | "info";
export interface iToastReducerInitialState {
  open: boolean;
  message: string;
  type: toastDisplayType;
}

export interface iOpenToastArg {
  message: string;
  /**
   * Default 'info'
   */
  type?: toastDisplayType;
}

export interface iAuthReducerInitialState {
  email: string;
  isLoggedIn: boolean;
  userId: string;
  token: string;
}

export type iSelectedProduct = {
  product: iProduct;
  variant: string;
  qty: number;
};

export type iPersonalInfo = {
  name: string;
  phone: string;
};

export type iAddress = {
  province: string;
  city: string;
  district: string;
  subdistrict: string;
  postalCode: string;
  detail: string;
};

export interface iRegistryCreationReducerInitialState {
  // name: string;
  // date: string;
  selectedProducts: Array<iRegistryCartItem>;
  // selectedDesign: string;
  personalInformation: iPersonalInfo;
  address: iAddress;
  // greeting: string;
  // picture: string;
  registry: iRegistry
}

export interface iPickerItemProps {
  label: string;
  value: string | number;
};
