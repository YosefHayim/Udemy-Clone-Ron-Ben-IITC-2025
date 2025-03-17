import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (verificationCredentials: {
  fullName?: string;
  code: string;
  email: string;
}) => Promise<number>;

const verifyCode: fn = async (verificationCredentials) => {
  try {
    const response = await axiosClient.post(
      `${baseUrl}/api/user/verify`,
      verificationCredentials
    );

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(`Error occurred during the login of user: `, error);
    throw error;
  }
};

export default verifyCode;
