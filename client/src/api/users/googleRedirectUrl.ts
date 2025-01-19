import { axiosClient, baseUrl } from "../configuration";

const googleRedirectUrl = async () => {
  try {
    const url = `${baseUrl}/api/user/auth/google/`;

    const {
      data: { url: redirectUrl },
    } = await axiosClient.post(url);

    if (redirectUrl) {
      console.log(redirectUrl);
      return redirectUrl;
    }
  } catch (error) {
    console.error(`Error has been occurred durning google auth: `, error);
  }
};

export default googleRedirectUrl;
