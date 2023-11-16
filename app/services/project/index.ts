import { client, endpoints } from "@/app/config";
import { IProject } from "@/app/interfaces";
import { useQuery } from "@tanstack/react-query";

/**
 * @description Custom hook for fetching project data using react-query.
 * Uses react-query's useQuery to handle API requests for project data.
 *
 * @returns {Object} An object containing the parameters from useQuery.
 * @property {boolean} isFetching - A boolean indicating whether the project data is currently being fetched.
 * @property {boolean} isError - A boolean indicating whether an error occurred while fetching project data.
 * @property {*} data - The project data received from the API.
 * @property {*} error - Error object if an error occurs during the API request.
 *
 * @example
 * const { isFetching, isError, data, error } = useGetProjects();
 */
export const useGetProjects = () => {
  const { isFetching, isError, data, error } = useQuery<
    IProject[] | undefined,
    any
  >({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await client.get(endpoints.project.root);
      return response.data;
    },
  });

  return { isFetching, isError, data, error };
};
