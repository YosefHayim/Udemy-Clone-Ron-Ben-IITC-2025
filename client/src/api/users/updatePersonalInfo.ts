import { axiosClient, localhostUrl } from "../configuration";

interface DataOfUser {
  fName: string;
  lName: string;
  headline: string;
  bio: string;
  website: string;
  xPlatform: string;
  youtube: string;
  linkedin: string;
  facebook: string;
}
const updatePersonalInfo = async (dataOfUser: DataOfUser) => {
  const url = `${localhostUrl}/api/user/`;
  try {
    const r = axiosClient.post(url, dataOfUser);

    if (r) {
      console.log(r);
    }
  } catch (error) {
    console.log(error);
  }
};

export default updatePersonalInfo;
