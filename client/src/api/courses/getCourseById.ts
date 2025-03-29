import { CourseData } from "../../types/types";
import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

type fn = (courseId: string) => Promise<CourseData>;

const getCourseById: fn = async (courseId: string) => {
  if (!courseId) throw new Error("Please provide courseId in url.");

  const sanitizedCourseId = courseId.trim();
  const url = `${isProduction ? baseUrl : localhostUrl}/api/course/${sanitizedCourseId}`;

  try {
    const r = await axiosClient.get(url);

    if (r) {
      console.log(r);
      return r?.data?.data;
    }
  } catch (error) {
    console.log(`Error occurred getting course by id: `, error.response.data.message);
    throw error;
  }
};

export default getCourseById;
