import axios from "axios";

export const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const localhostUrl = import.meta.env.VITE_LOCALHOST;
export const isProduction = import.meta.env.VITE_NODE_ENV === "production";

export const axiosClient = axios.create({
  baseURL: isProduction ? baseUrl : localhostUrl,
  withCredentials: true,
});