import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const googleLogin = async (googleCode: string) => {
  const code = googleCode;

  try {
    const url = `${process.env.NODE === "production" ? `${baseUrl}` : `${localhostUrl}`}/api/user/google/auth/login`;
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
