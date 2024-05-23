import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { iAuthReducerInitialState } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_HOST
export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const t: any = getState()
    const authState: iAuthReducerInitialState = t.auth
    headers.set("Authorization", `Bearer ${authState.token}`)
  },
})
