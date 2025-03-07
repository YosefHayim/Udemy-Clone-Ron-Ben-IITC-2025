import { axiosClient, localhostUrl } from "../configuration";

type email = {
  email: string;
};

type fn = (email: email) => Promise<any>;

const loginUser: fn = async (email) => {
  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/auth/login`,
      email
    );

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(`Error occurred during the login of user: `, error);
    throw error;
  }
};

export default loginUser;
