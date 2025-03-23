import {
  axiosClient,
  baseUrl,
  isProduction,
  localhostUrl,
} from "../configuration";

const googleLogin = async (googleCode: string) => {
  const code = googleCode;

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/user/google/auth/login`;
    const res = await axiosClient.post(url, { code });
    if (res) {
      // console.log(res.data);
      localStorage.setItem("cookie", res.data.token);
      return res.data.token;
    }
  } catch (error) {
    console.log(
      `Error has occurred durning request to backend via googleLogin: `,
      error,
    );
  }
};

export default googleLogin;
