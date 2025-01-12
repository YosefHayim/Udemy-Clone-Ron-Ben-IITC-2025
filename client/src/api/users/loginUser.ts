import axios from "axios";
import { baseUrl, localhostUrl } from "../baseUrl";

const loginUser = async (credentials: string) => {
  console.log(credentials);

  axios.defaults.withCredentials = true;
  try {
    const response = await axios.post(
      `${baseUrl}/api/user/auth/login`,
      credentials
    );

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error(`Error occurred durning the login of user: `, error);
  }
};

export default loginUser;
