import { endpoints } from "@/app/config";
import { IProject } from "@/app/interfaces";
import { apiSlice } from "../api/api.slice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query<IProject[], any>({
      query: () => endpoints.project.root,
      providesTags: ["Project"],
    }),
    addNewProject: builder.mutation<IProject, Partial<any>>({
      query: (body) => ({
        url: endpoints.project.root,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Project"],
    }),
    getProjectBySlug: builder.query<IProject, string>({
      query: (slug) => `${endpoints.project.root}/${slug}`,
      providesTags: ["Project"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useAddNewProjectMutation,
  useGetProjectBySlugQuery,
} = projectApi;
