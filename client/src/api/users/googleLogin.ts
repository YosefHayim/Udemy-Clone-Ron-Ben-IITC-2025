import { axiosClient, localhostUrl } from "../configuration";

const googleLogin = async (googleCode: string) => {
  console.log(googleCode);

  try {
    const url = `${localhostUrl}/api/user/google/auth/login`;
    const res = await axiosClient.post(url, { code: googleCode });
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.log(
      `Error has occurred durning request to backend via googleLogin: `,
      error
    );
  }
};

export default googleLogin;
