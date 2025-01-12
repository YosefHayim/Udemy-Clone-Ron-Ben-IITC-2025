import axios from "axios";
import { baseUrl, localhostUrl } from "../baseUrl";

const loginUser = async (credentials: string) => {
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.post(
      `${baseUrl}/api/user/auth/login`,
      credentials
    );

    return response.data;
  } catch (error) {
    console.error(`Error occurred durning the login of user: `, error);
  }
};

export default loginUser;
