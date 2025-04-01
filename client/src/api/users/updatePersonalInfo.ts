import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const updatePersonalInfo = async (dataOfUser) => {
  if (!dataOfUser) throw new Error("Please provide dataOfUser in url.");

  console.log(dataOfUser);

  const url = `${isProduction ? baseUrl : localhostUrl}/api/user/`;
  try {
    const r = await axiosClient.put(url, dataOfUser);

    if (r) {
      console.log(r.data);
      return r;
    }
  } catch (error) {
    console.log(`error occurred during update user personal info`, error.response.data.message);
    throw error;
  }
};

export default updatePersonalInfo;
