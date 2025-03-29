import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const googleLogin = async (googleCode: string) => {
  if (!googleCode) throw new Error("Please provide googleCode in url.");

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/user/google/auth/login`;
    const r = await axiosClient.post(url, { code: googleCode });

    if (r) {
      console.log(r);
      return r?.data?.token;
    }
  } catch (error) {
    console.log(
      `Error has occurred durning request to backend via googleLogin: `,
      error.response.data.message
    );
    throw error;
  }
};

export default googleLogin;
