import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const refreshMe = async () => {
  try {
    const r = await axiosClient.post(`${isProduction ? baseUrl : localhostUrl}/api/user/me`);

    if (r) {
      console.log(r.data.data);
      return r.data;
    }
  } catch (error) {
    console.log(`Error has been occurred durning refreshing user: `, error.response.data.message);
    throw error;
  }
};

export default refreshMe;
