import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const buyArrayOfCoursesIds = async () => {
  try {
    const url = `${process.env.NODE === "production" ? `${baseUrl}` : `${localhostUrl}`}/api/user/add/course/`;
    const res = axiosClient.post(url);

    if (res) {
      console.log(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(`Error has been occurred durning buying courses: `, error);
  }
};

export default buyArrayOfCoursesIds;
