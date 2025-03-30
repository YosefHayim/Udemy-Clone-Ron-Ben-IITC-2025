import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

type fn = (courseId: string | null) => Promise<any>;

const getAllReviewsByCourseId: fn = async (courseId = "") => {
  if (!courseId) throw new Error("Please provide courseId in url.");

  const sanitizedCourseId = courseId.trim();
  const url = `${isProduction ? baseUrl : localhostUrl}/api/review/course/${sanitizedCourseId}`;

  try {
    const r = await axiosClient.get(url);

    if (r) {
      console.log(r.data.data);
      return r?.data?.data;
    }
  } catch (error) {
    console.log(`Error fetching course with ID ${sanitizedCourseId}:`, error.response.data.message);
    throw error;
  }
};

export default getAllReviewsByCourseId;
