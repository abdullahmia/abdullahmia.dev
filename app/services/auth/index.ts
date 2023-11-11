import { client, endpoints } from "@/app/config";
import constants from "@/app/constants";
import { ILoginResponse, LoginBody } from "@/app/interfaces";
import { cookies } from "@/app/utils";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

/**
 * @description Custom hook for handling user login.
 * Uses react-query's useMutation to handle API mutations for login.
 *
 * @returns {Object} An object containing the parameters from useMutation.
 * @property {Function} mutate - Function to trigger the login mutation.
 * @property {boolean} isLoading - A boolean indicating whether the login mutation is in progress.
 * @property {*} data - Data received from the login mutation.
 * @property {*} error - Error object if the login mutation encounters an error.
 * @property {Function} reset - Function to reset the state of the mutation.
 *
 * @example
 * const { mutate, isLoading, data, error, reset } = useLogin();
 * mutate({ username: 'example', password: 'password' });
 */
export const useLogin = () => {
  const params = useMutation({
    mutationFn: async (body: LoginBody) => {
      const response = await client.post(endpoints.auth.login, body);
      return response.data;
    },
    onSuccess: (data: ILoginResponse) => {
      console.log(data);
      const { token, user } = data;

      // store token on cookies
      cookies.set(constants.auth.token, token, "86400");

      // store user information on loacl storage
      localStorage.setItem(constants.auth.user, JSON.stringify(user));
    },
  });

  return { ...params };
};

/**
 * @description Check if the user is currently logged in.
 * It checks for the presence of a valid token in cookies and user information in local storage.
 *
 * @returns {boolean} True if the user is logged in, false otherwise.
 *
 * @example
 * const userIsLoggedIn = isLoggedIn();
 * if (userIsLoggedIn) {
 *   // User is logged in, perform actions accordingly
 * } else {
 *   // User is not logged in, redirect to login page or show login prompt
 * }
 */
export const isLoggedIn = () => {
  const token = cookies.get(constants.auth.token);
  const user = localStorage.getItem(constants.auth.user);

  return token && user;
};

/**
 * @description Custom hook for handling user logout.
 * Clears the authentication token from cookies and removes user information from local storage.
 *
 * @returns {Object} An object containing the logout function and loading state.
 * @property {Function} logout - Function to trigger the logout process.
 * @property {boolean} isLoading - A boolean indicating whether the logout process is in progress.
 *
 * @example
 * const { logout, isLoading } = useLogout();
 * // Trigger the logout process
 * logout();
 */
export const useLogout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const logout = () => {
    setIsLoading(true);
    cookies.delete(constants.auth.token);
    localStorage.removeItem(constants.auth.user);
    setIsLoading(false);
  };

  return { logout, isLoading };
};
