import constants from "@/app/constants";
import { ILoginPayload, ILoginResponse } from "@/app/interfaces";
import { cookies } from "@/app/utils";
import { apiSlice } from "../api/api.slice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, any>({
      query: (loginPayload: ILoginPayload) => ({
        url: "/auth/login",
        method: "POST",
        body: loginPayload,
      }),
      async onQueryStarted({ loginPayload }, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const { token, user } = result.data;
          if (token && user) {
            cookies.set(constants.auth.token, token, "60"); // 300 - 604800
            localStorage.setItem(constants.auth.user, JSON.stringify(user));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
