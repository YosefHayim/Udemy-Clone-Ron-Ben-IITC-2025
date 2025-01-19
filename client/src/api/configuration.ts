import axios from "axios";

export const baseUrl = "https://udemy-clone-ron-ben.onrender.com";
export const localhostUrl = "http://localhost:3000";

export const axiosClient = axios.create({
  baseURL: localhostUrl, // Your back-end URL
  withCredentials: true, // Ensures cookies are included in all requests
});
