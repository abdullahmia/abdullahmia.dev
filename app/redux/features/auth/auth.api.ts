import { ILoginPayload, ILoginResponse } from "@/app/interfaces";
import { apiSlice } from "../api/api.slice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, any>({
      query: (loginPayload: ILoginPayload) => ({
        url: "/auth/login",
        method: "POST",
        body: loginPayload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
