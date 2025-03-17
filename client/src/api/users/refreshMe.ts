import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const refreshMe = async () => {
  try {
    const res = await axiosClient.post(`${baseUrl}/api/user/me`);

    if (res) {
      console.log(res);
      localStorage.setItem("cookie", res.data.token);
      return res;
    }
  } catch (error) {
    console.log(`Error has been occurred durning refreshing user.`, error);
  }
};

export default refreshMe;
