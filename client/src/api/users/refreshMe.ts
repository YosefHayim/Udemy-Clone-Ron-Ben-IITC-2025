import { axiosClient, localhostUrl } from "../configuration";

const refreshMe = async () => {
  try {
    const url = `${localhostUrl}/api/user/me`;
    const res = await axiosClient.get(url);
    if (res) {
      console.log(res);

      return res;
    }
  } catch (error) {
    console.log(`Error has been occurred durning refreshing user.`, error);
  }
};

export default refreshMe;
