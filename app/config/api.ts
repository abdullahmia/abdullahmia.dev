import axios from "axios";

// TODO: add this endpoint on the environment file
//! ONLY FOR DEV PURPOSES

// axios instance
export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  // increased the timeout since our server is like a tortoise 🙂
  // although this is not a good practice
  timeout: 300000,
  timeoutErrorMessage: "Request timed out",
});

export default api;
