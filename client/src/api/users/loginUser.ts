import { axiosClient, localhostUrl } from "../configuration";

const loginUser = async (credentials: string) => {
  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/auth/login`,
      credentials
    );

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(`Error occurred durning the login of user: `, error);
  }
};

export default loginUser;
