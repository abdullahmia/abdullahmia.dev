import { endpoints } from "@/app/config";
import { IProject } from "@/app/interfaces";
import { apiSlice } from "../api/api.slice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query<IProject[], any>({
      query: () => endpoints.project.root,
    }),
    addNewProject: builder.mutation<IProject, Partial<any>>({
      query: (body) => ({
        url: endpoints.project.root,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery, useAddNewProjectMutation } = projectApi;
