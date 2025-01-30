import { axiosClient, localhostUrl } from "../configuration";

const buyCourseById = async (courses: string[] | string) => {
  try {
    const url = `${localhostUrl}/api/user/add/courses`;

    const response = await axiosClient.post(url, { courses });
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.error("Error occurred during buying courses for user: ", error);
  }
};

export default buyCourseById;
