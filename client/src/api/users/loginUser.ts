import { axiosClient, localhostUrl } from "../configuration";

type fn = (credentials: string) => Promise<any>;

const loginUser: fn = async (credentials) => {
  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/auth/login`,
      credentials
    );

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(`Error occurred during the login of user: `, error);
  }
};

export default loginUser;
