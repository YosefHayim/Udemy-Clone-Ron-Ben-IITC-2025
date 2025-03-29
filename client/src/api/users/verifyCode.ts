import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

type fn = (verificationCredentials: {
  fullName?: string;
  code: string;
  email: string;
}) => Promise<any>;

const verifyCode: fn = async (verificationCredentials) => {
  try {
    const r = await axiosClient.post(
      `${isProduction ? baseUrl : localhostUrl}/api/user/verify`,
      verificationCredentials
    );

    if (r) {
      console.log(r.data);
      return r.data.token;
    }
  } catch (error) {
    console.log(`Error occurred during the login of user: `, error.response.data.message);
    throw error;
  }
};

export default verifyCode;
