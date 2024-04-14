import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/lib/services/baseQuery";
import { iEvent, iGetEventParam, iResponse } from "@/lib/services/type";

export const EventApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'eventApi',
  endpoints: builder => ({
    getEvents: builder.query<iResponse<Array<iEvent>>, iGetEventParam>({
      query: (params) => ({
        url: '/event',
        params
      }),
      
    })
  })
})

export const { useGetEventsQuery } = EventApi