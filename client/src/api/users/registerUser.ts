import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";
import { RegisterUserPayload } from "../../types/types";

type fn = (data: RegisterUserPayload) => Promise<any>;

const registerUser: fn = async (data: RegisterUserPayload): Promise<any> => {
  try {
    const response = await axiosClient.post(
      `${isProduction ? baseUrl : localhostUrl}/api/user/auth/signup`,
      data
    );

    console.log(response);
    localStorage.setItem("cookie", response.data.token);
    return response;
  } catch (error) {
    console.log(`Error occurred during the signup: `, error);
    throw error;
  }
};

export default registerUser;
