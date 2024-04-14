import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import {
  iDetailRegistry,
  iRegistry,
  iRegistryCartItem,
  iRegistryStepOnePayload,
  iRegistryStepThreePayload,
  iRegistryStepTwoPayload,
  iResponse,
} from "../type";
import { setRegistryDetailFromAPI } from "@/lib/features/registry/registryCreationSlice";

export const RegistriesApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "registriesApi",
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getRegistryDetail: builder.query<iResponse<iDetailRegistry>, string>({
      query: params => ({
        url: `/registry/${params}`
      })
    }),
    stepOne: builder.mutation<iRegistry, iRegistryStepOnePayload>({
      query: (body) => ({
        url: "/registry/creation/step-1",
        body,
        method: "post",
      }),
      transformResponse(baseQueryReturnValue: iResponse<iRegistry>) {
        return baseQueryReturnValue.data;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setRegistryDetailFromAPI(data));
        } catch (err) {}
      },
    }),
    getCartItems: builder.query<Array<iRegistryCartItem>, string>({
      query: (params) => ({
        url: `/registry/creation/cart/${params}/list`,
        method: "get",
      }),
      providesTags: ["cart"],
      transformResponse(
        baseQueryReturnValue: iResponse<Array<iRegistryCartItem>>
      ) {
        return baseQueryReturnValue.data;
      },
    }),
    addToRegistryCart: builder.mutation<
      iResponse<{}>,
      { body: { product_variation_id: string; qty: number }; params: string }
    >({
      query: ({ body, params }) => ({
        url: `/registry/creation/cart/${params}/create`,
        method: "post",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteRegistryCartItem: builder.mutation<iResponse<{}>, string>({
      query: (params) => ({
        url: `registry/creation/cart/delete/${params}`,
        method: "delete",
      }),
      invalidatesTags: ["cart"],
    }),
    updateCartItem: builder.mutation<
      iResponse<{}>,
      { body: { qty: number }; params: string }
    >({
      query: ({ body, params }) => ({
        url: `registry/creation/cart/update/${params}`,
        method: "put",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    stepTwo: builder.mutation<iResponse<{}>, iRegistryStepTwoPayload>({
      query: body => ({
        url: 'registry/creation/step-2',
        method: 'post',
        body
      })
    }),
    stepThree: builder.mutation<iResponse<{}>, iRegistryStepThreePayload>({
      query: body => ({
        url: 'registry/creation/step-3',
        method: 'post',
        body
      })
    })
  }),
});

export const {
  useStepOneMutation,
  useStepTwoMutation,
  useStepThreeMutation,
  useGetCartItemsQuery,
  useAddToRegistryCartMutation,
  useDeleteRegistryCartItemMutation,
  useUpdateCartItemMutation,
  useGetRegistryDetailQuery
} = RegistriesApi;
