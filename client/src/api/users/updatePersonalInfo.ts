import { DataOfUser } from "../../types/types";
import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const updatePersonalInfo = async (dataOfUser: DataOfUser) => {
  if (!dataOfUser) throw new Error("Please provide dataOfUser in url.");

  const url = `${isProduction ? baseUrl : localhostUrl}/api/user/`;
  try {
    const r = axiosClient.post(url, dataOfUser);

    if (r) {
      console.log(r);
      return r;
    }
  } catch (error) {
    console.log(`error occurred during update user personal info`);
    throw error;
  }
};

export default updatePersonalInfo;
