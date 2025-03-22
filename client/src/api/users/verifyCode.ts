import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (verificationCredentials: {
  fullName?: string;
  code: string;
  email: string;
}) => Promise<number>;

const verifyCode: fn = async (verificationCredentials) => {
  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/verify`,
      verificationCredentials,
    );

    if (response) {
      console.log(response.data);
      localStorage.setItem("cookie", response.data.token);
      return response.data.token;
    }
  } catch (error) {
    console.log(`Error occurred during the login of user: `, error);
    throw error;
  }
};

export default verifyCode;
