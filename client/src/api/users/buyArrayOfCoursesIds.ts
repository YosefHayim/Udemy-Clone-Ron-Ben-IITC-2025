import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const buyArrayOfCoursesIds = async () => {
  try {
    const url = `${baseUrl}/api/user/add/course/`;
    const res = axiosClient.post(url);

    if (res) {
      console.log(res);
      return res;
    }
  } catch (error) {
    console.log(`Error has been occurred durning buying courses: `, error);
  }
};

export default buyArrayOfCoursesIds;
