import constants from "../constants";
import { cookies } from "../utils";

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
