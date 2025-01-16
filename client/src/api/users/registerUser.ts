import axios from "axios";
import { axiosClient, localhostUrl } from "../configuration";
import { RegisterUserPayload } from "@/types/types";

const registerUser = async (data: RegisterUserPayload): Promise<any> => {
  axios.defaults.withCredentials = true;

  try {
    const response = await axiosClient.post<RegisterUserPayload>(
      `${localhostUrl}/api/user/auth/signup`,
      data
    );
    if (response) {
      console.log(response);
      return response.data; // Ensure response structure matches `RegisterUserInfo`
    }
  } catch (error) {
    console.error(`Error occurred during the signup: `, error);
    return undefined;
  }
};

export default registerUser;
