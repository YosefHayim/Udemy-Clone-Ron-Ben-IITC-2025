import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (code: string | null) => Promise<any>;

const googleRedirectUrl: fn = async (code: string | null) => {
  try {
    const url = `${localhostUrl}/api/user/auth/google/`;

    const {
      data: { url: redirectUrl },
    } = await axiosClient.post(url, { code });

    if (redirectUrl) {
      console.log(redirectUrl);
      return redirectUrl;
    }
  } catch (error) {
    console.error(`Error has been occurred durning google auth: `, error);
  }
};

export default googleRedirectUrl;
