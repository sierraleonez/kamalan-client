import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/lib/services/baseQuery";
import {
  iPaginationResponse,
  iPaginationData,
  iResponse,
  iProductImage,
  iProductVariation,
  iBrand,
} from "@/lib/services/type";

interface iProductBE {
  id: string;
  name: string;
  thumbnail_url: string;
  description: string;
  brand_id: string;
  created_at: string;
  updated_at: string;
  default_price: number;
  location: string;
  brand_name: string;
}

interface iGetProductsParam {
  event_id?: string;
}



export interface iProductDetail {
  id: string;
  name: string;
  thumbnail_url: string;
  description: string;
  brand_id: string;
  created_at: string;
  updated_at: string;
  default_price: number;
  images: Array<iProductImage>;
  productVariations: Array<iProductVariation>;
  brand: iBrand;
}

export const ProductApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "productApi",
  endpoints: (builder) => ({
    getProducts: builder.query<
      iPaginationData<Array<iProductBE>>,
      iGetProductsParam
    >({
      query: (params) => ({
        url: "/product",
        params,
      }),
      transformResponse(
        baseQueryReturnValue: iPaginationResponse<Array<iProductBE>>
      ) {
        return baseQueryReturnValue.data;
      },
    }),
    getDetailProduct: builder.query<iProductDetail, string>({
      query: (params) => ({
        url: `/product/${params}`,
      }),
      transformResponse(baseQueryReturnValue: iResponse<iProductDetail>) {
        return baseQueryReturnValue.data
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetDetailProductQuery, useLazyGetDetailProductQuery } = ProductApi;
