import axios from "axios";

export const baseUrl = "https://udemy-clone-ron-ben.onrender.com";
export const localhostUrl = "http://localhost:3000";

export const axiosClient = axios.create({
  baseURL: `${localhostUrl}`,
  withCredentials: true, // Add this to include cookies in all requests
});
