import { iPickerItemProps } from "@/types";

export interface iResponse<T> {
  message: string;
  data: T;
}

interface iPaginationResult {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url?: string;
  previous_page_url?: string;
}

export interface iPaginationResponse<T> {
  message: string;
  data: iPaginationData;
}

export interface iPaginationData<T> {
  meta: iPaginationResult;
  data: T;
}

interface iEvent {
  id: number;
  name: string;
  asset_url: string;
  description: string;
  include_on: string;
}

interface iGetEventParam {
  include_on: "GIFT" | "REGISTRY";
}

export interface iRegistry {
  id: string;
  name: string;
  is_private: boolean;
  is_published: boolean;
  message?: string;
  event_date: string;
  user_asset_url?: string;
  design_id?: string;
  user_id: string;
}

export interface iRegistryStepOnePayload {
  name: string;
  event_id: string;
  event_date: string;
}

export interface iProductVariation {
  id: string;
  product_id: string;
  name: string;
  price: number;
  qty: number;
  created_at: string;
  updated_at: string;
}

export interface iBrand {
  id: string;
  name: string;
  location: string;
  thumbnail_url: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface iProductImage {
  id: string;
  product_variation_id: string;
  asset_url: string;
}

export interface iRegistryCartItem {
  id: string;
  registry_id: string;
  product_variation_id: string;
  initial_qty: number;
  current_qty: number;
  created_at: string;
  updated_at: string;
  thumbnail_url: string;
  product_id: string;
  name: string;
  stock_qty: number;
}

export interface iDesign {
  id: string;
  name: string;
  asset_url: string;
  created_at: string;
  updated_at: string;
}

export interface iDesignPickerItem extends iPickerItemProps {
  asset_url: string;
}

export interface iRegistryStepTwoPayload {
  registry_id: string;
  design_id: string;
}

export interface iRegistryStepThreePayload {
  registry_id: string;
  is_private: boolean;
  is_published: boolean;
  user_asset: File;
  message: string;
  name: string;
  phone_number: string;
  province: string;
  city: string;
  subdistrict: string;
  postal_code: string;
  detail_address: string;
}

export interface iProvince {
  id: string;
  province: string;
}

export type iCityType = "Kabupaten" | "Kota";

export interface iCity {
  id: string;
  province_id: string;
  type: iCityType;
  city_name: string;
  postal_code: string;
}

export interface iSubdistrict {
  id: string;
  province_id: string;
  city_id: string;
  subdistrict_name: string;
  province_name: string;
  city_name: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iDetailRegistry {
  id: string;
  name: string;
  is_private: boolean;
  is_published: boolean;
  message: string;
  event_date: string;
  user_asset_url: string;
  design_id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  event_id: string;
  event: iEvent;
  user: iUser;
  design: {
    id: string;
    name: string;
    asset_url: string;
    created_at: string;
    updated_at: string;
  };
  cart: Array<{
    id: string;
    registry_id: string;
    product_variation_id: string;
    initial_qty: number;
    current_qty: number;
    created_at: string;
    updated_at: string;
  }>;
  productVariation: Array<{
    id: string;
    product_id: string;
    name: string;
    price: number;
    qty: number;
    created_at: string;
    updated_at: string;
    product: {
      id: string;
      name: string;
      thumbnail_url: string;
      description: string;
      brand_id: string;
      created_at: string;
      updated_at: string;
      default_price: number;
    };
  }>;
}
