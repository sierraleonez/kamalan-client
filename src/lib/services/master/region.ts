import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { iCity, iProvince, iResponse, iSubdistrict } from "../type";
import { iPickerItemProps } from "@/types";

export const RegionApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "regionApi",
  endpoints: (builder) => ({
    getProvinces: builder.query<Array<iPickerItemProps & iProvince>, void>({
      query: () => ({
        url: "/master/province",
        method: "get",
      }),
      transformResponse(
        baseQueryReturnValue: iResponse<Array<iProvince>>,
      ) {
        return baseQueryReturnValue.data.map((province) => ({
          label: province.province,
          value: province.id,
          ...province,
        }));
      },
    }),
    getCities: builder.query<Array<iPickerItemProps & iCity>, string>({
      query: (province_id) => ({
        url: `/master/city/${province_id}`,
        method: "get",
      }),
      transformResponse(
        baseQueryReturnValue: iResponse<Array<iCity>>,
      ) {
        return baseQueryReturnValue.data.map((city) => ({
          label: city.city_name,
          value: city.id,
          ...city,
        }));
      },
    }),
    getSubdistricts: builder.query<
      Array<iPickerItemProps & iSubdistrict>,
      string
    >({
      query: (subdistrict_id) => ({
        url: `/master/subdistrict/${subdistrict_id}`,
        method: "get",
      }),
      transformResponse(
        baseQueryReturnValue: iResponse<Array<iSubdistrict>>,
      ) {
        return baseQueryReturnValue.data.map((subdistrict) => ({
          label: subdistrict.subdistrict_name,
          value: subdistrict.id,
          ...subdistrict,
        }));
      },
    }),
  }),
});

export const {
  useGetProvincesQuery,
  useGetCitiesQuery,
  useGetSubdistrictsQuery,
  useLazyGetCitiesQuery,
  useLazyGetSubdistrictsQuery
} = RegionApi;
