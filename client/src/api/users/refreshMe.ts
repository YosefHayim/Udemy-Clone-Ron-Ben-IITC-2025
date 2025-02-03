import { axiosClient, localhostUrl } from "../configuration";

const refreshMe = async () => {
  try {
    const res = await axiosClient.post(`${localhostUrl}/api/user/me`);
    if (res) {
      console.log(res);
      return res;
    }
  } catch (error) {
    console.log(`Error has been occurred durning refreshing user.`, error);
  }
};

refreshMe();

export default refreshMe;
