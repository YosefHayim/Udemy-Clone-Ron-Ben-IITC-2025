import { axiosClient, localhostUrl } from "../configuration";

type fn = (code: string) => Promise<any>;

const verifyCode: fn = async (code) => {
  try {
    const response = await axiosClient.post(
      `${localhostUrl}/api/user/verify/${code}`
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
