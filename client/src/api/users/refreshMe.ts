import {
  axiosClient,
  baseUrl,
  isProduction,
  localhostUrl,
} from "../configuration";

const refreshMe = async () => {
  try {
    const res = await axiosClient.post(
      `${isProduction ? baseUrl : localhostUrl}/api/user/me`,
    );

    if (res) {
      console.log(res.data);
      localStorage.setItem("cookie", res.data.token);
      return res.data;
    }
  } catch (error) {
    console.log(`Error has been occurred durning refreshing user.`, error);
  }
};

export default refreshMe;
