import { axiosClient, localhostUrl } from "../configuration";

const buyCourseById = async (course: string | string) => {
  try {
    const url = `${localhostUrl}/api/user/add/course/${course}`;

    const response = await axiosClient.post(url);
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.error("Error occurred during buying courses for user: ", error);
  }
};

export default buyCourseById;
