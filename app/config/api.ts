import axios from "axios";
import constants from "../constants";
import { cookies } from "../utils";

// TODO: add this endpoint on the environment file
//! ONLY FOR DEV PURPOSES

// axios instance
export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 300000,
  timeoutErrorMessage: "Request timed out",
});

api.interceptors.request.use(
  (config) => {
    const token = cookies.get(constants.auth.token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// api.interceptors.response.use(
//   (response) => {
//     const responseData = response.data;
//     return responseData;
//   },
//   (error) => {
//     const errorResponse = {
//       status: error.response?.status,
//       message: error.response?.data?.message,
//     };
//     return errorResponse;
//   }
// );

export default api;
