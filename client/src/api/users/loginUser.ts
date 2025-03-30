import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

type email = {
  email: string;
};

type fn = (email: email) => Promise<any>;

const loginUser: fn = async (email) => {
  if (!email) throw new Error("Please provide email in url.");

  try {
    const r = await axiosClient.post(
      `${isProduction ? baseUrl : localhostUrl}/api/user/auth/login`,
      email
    );

    if (r) {
      console.log(r);

      return r?.data?.data;
    }
  } catch (error) {
    console.log(`Error occurred during the login of user: `, error.response.data.message);
    throw error;
  }
};

export default loginUser;
