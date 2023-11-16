import { endpoints } from "@/app/config";
import { IProject } from "@/app/interfaces";
import { apiSlice } from "../api/api.slice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query<IProject[], any>({
      query: () => endpoints.project.root,
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
