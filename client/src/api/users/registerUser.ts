import axios from "axios";
import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const registerUser = async (data) => {
  axios.defaults.withCredentials = true;

  try {
    const response = await axiosClient.post(`${baseUrl}/api/user/auth/signup`, data);
    if (response) {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.error(`Error occurred during the signup: `, error);
  }
};

export default registerUser;
