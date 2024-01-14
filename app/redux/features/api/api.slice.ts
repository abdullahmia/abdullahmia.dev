import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-abdullahmia-dev.onrender.com/api/v1",
    // baseUrl: "http://localhost:8000/api/v1",
    prepareHeaders: async (headers, { getState }: any) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Project"],
  endpoints: (builder) => ({}),
});
