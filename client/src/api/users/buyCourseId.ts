import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const buyCourseById = async (courseId: string | string) => {
  try {
    const url = `${localhostUrl}/api/user/add/course/${courseId}`;

    const response = await axiosClient.post(url);
    if (response) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("Error occurred during buying courses for user: ", error);
  }
};

export default buyCourseById;
