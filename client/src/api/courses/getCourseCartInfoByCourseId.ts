import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

type fn = (courseId: string) => Promise<any>;

const getCourseCartInfoByCourseId: fn = async (courseId: string) => {
  if (!courseId) throw new Error("Please provide courseId in url.");

  const sanitizedCourseId = courseId.trim();
  const url = `${isProduction ? baseUrl : localhostUrl}/api/course/cartInfo/${sanitizedCourseId}`;

  try {
    const r = await axiosClient.get(url);

    if (r) {
      console.log(r);
      return r?.data?.data;
    }
  } catch (error) {
    console.log(`Error occurred fetching course cart info: `, error.response.data.message);
    throw error;
  }
};

export default getCourseCartInfoByCourseId;
