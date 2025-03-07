import { axiosClient, localhostUrl } from "../configuration";
import { RegisterUserPayload } from "@/types/types";

type fn = (data: RegisterUserPayload) => Promise<any>;

const registerUser: fn = async (data: RegisterUserPayload): Promise<any> => {
  try {
    const response = await axiosClient.post<RegisterUserPayload>(
      `${localhostUrl}/api/user/auth/signup`,
      data
    );
    if (response.status !== 200) {
      throw new Error("Registration failed");
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(`Error occurred during the signup: `, error);
    return undefined;
  }
};

export default registerUser;
