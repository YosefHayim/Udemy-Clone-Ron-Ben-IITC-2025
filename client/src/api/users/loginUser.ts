import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type Credentials = {
  email: string;
  password: string;
};

type fn = (credentials: Credentials) => Promise<any>;

const loginUser: fn = async (credentials) => {
  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/auth/login`,
      credentials
    );

    if (response) {
      // console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error(`Error occurred during the login of user: `, error);
    throw error; // Ensure errors are thrown to trigger the mutation's `onError`
  }
};

export default loginUser;
