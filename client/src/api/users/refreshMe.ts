import { setUserInformation } from "@/utils/setUserInformation";
import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const refreshMe = async () => {
  try {
    const r = await axiosClient.post(`${isProduction ? baseUrl : localhostUrl}/api/user/me`);

    if (r) {
      console.log(r.data);
      setUserInformation(r.data.token);
      return r.data;
    }
  } catch (error) {
    console.log(`Error has been occurred durning refreshing user.`, error);
    throw error;
  }
};

export default refreshMe;
