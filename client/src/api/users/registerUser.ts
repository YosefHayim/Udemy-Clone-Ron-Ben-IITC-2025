import axios from "axios";
import { baseUrl, localhostUrl } from "../baseUrl";

const registerUser = async (data) => {
  axios.defaults.withCredentials = true;

  try {
    const response = await axios.post(
      `${baseUrl}/api/user/auth/signup`,
      data
    );
    if (response) {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.error(`Error occurred during the signup: `, error);
  }
};

export default registerUser;
