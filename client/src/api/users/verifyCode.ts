import { axiosClient, localhostUrl } from "../configuration";

type fn = (verificationCredentials: {
  code: string;
  email: string;
}) => Promise<any>;

const verifyCode: fn = async (verificationCredentials) => {
  console.log(verificationCredentials);

  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/verify`,
      verificationCredentials
    );

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error(`Error occurred during the login of user: `, error);
    throw error;
  }
};

export default verifyCode;
