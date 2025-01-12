import axios from "axios";
import { baseUrl, localhostUrl } from "../baseUrl";

const registerUser = async (data) => {
  console.log(data);
  axios.defaults.withCredentials = true;

  try {
    const response = await axios.post(
      `${localhostUrl}/api/user/auth/signup`,
      data
    );
    console.log(response);

    return response;
  } catch (error) {
    console.error(`Error occurred during the signup: `, error);
  }
};

export default registerUser;
