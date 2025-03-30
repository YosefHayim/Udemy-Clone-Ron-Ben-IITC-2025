import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const buyCourseById = async (courseId: string | string) => {
  if (!courseId) throw new Error("Please provide course Id in url.");

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/course/add/${courseId}`;

    const r = await axiosClient.post(url);
    if (r) {
      console.log(r.data.data);
      return r.data;
    }
  } catch (error) {
    console.log("Error occurred during buying courses for user: ", error.response.data.message);
    throw error;
  }
};

export default buyCourseById;
