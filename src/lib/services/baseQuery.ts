import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { iAuthReducerInitialState } from "@/types";

export const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://monkfish-app-jc37p.ondigitalocean.app/api/'
  baseUrl: 'http://localhost:3333/api',
  prepareHeaders: (headers, { getState }) => {
    const t: any = getState()
    const authState: iAuthReducerInitialState = t.auth
    headers.set("Authorization", `Bearer ${authState.token}`)
  },
})
