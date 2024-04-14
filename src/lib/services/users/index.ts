import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { iResponse } from "../type";

export const UsersApi = createApi({
  baseQuery,
  reducerPath: "userApi",
  endpoints: (builder) => ({
    login: builder.mutation<
      { message: string; data: { type: string; token: string } },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/login",
        method: "post",
        body,
      }),
    }),
    register: builder.mutation<
      iResponse<{}>,
      { name: string; email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/create",
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = UsersApi;
