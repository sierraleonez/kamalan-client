import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { iDesign, iDesignPickerItem, iResponse } from "../type";

export const DesignApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'designApi',
  endpoints: builder => ({
    getRegistryDesign: builder.query<iDesignPickerItem[], void>({
      query: () => ({
        url: '/registry-design'
      }),
      transformResponse(baseQueryReturnValue: iResponse<iDesign[]>) {
        return baseQueryReturnValue.data.map(item => ({
          label: item.name,
          value: item.id,
          asset_url: item.asset_url
        }))
      },
    })
  })
})

export const { useGetRegistryDesignQuery } = DesignApi