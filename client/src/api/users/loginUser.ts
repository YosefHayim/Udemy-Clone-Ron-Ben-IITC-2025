import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const loginUser = async (credentials: string) => {
  console.log(credentials);

  try {
    const response = await axiosClient.post(
      `${baseUrl}/api/user/auth/login`,
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
