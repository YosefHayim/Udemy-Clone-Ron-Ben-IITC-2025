import axios from "axios";
import { axiosClient, baseUrl, localhostUrl } from "../configuration";
import Cookies from "js-cookie";

const loginUser = async (credentials: string) => {
  console.log(credentials);

  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/auth/login`,
      credentials
    );

    if (response) {
      console.log(response);
      const cookie = Cookies.get("cookie");
      console.log(cookie);

      return response.data;
    }
  } catch (error) {
    console.error(`Error occurred durning the login of user: `, error);
  }
};

export default loginUser;
