import { axiosClient, baseUrl } from "../configuration";

const getAllReviewsByCourseId = async (
  courseId: string,
  limit = 13,
  page = 1
) => {
  if (!courseId || typeof courseId !== "string") {
    console.error("Invalid course ID provided.");
    return null;
  }

  const sanitizedCourseId = courseId.trim();
  const url = `${baseUrl}/api/review/course/${sanitizedCourseId}?limit=${limit}&page=${page}`;

  try {
    const response = await axiosClient.get(url);

    if (response?.data?.data) {
      return response.data.data;
    }

    console.warn("No course data found in the response.");
    return null;
  } catch (error) {
    console.error(`Error fetching course with ID ${sanitizedCourseId}:`, error);
    throw error;
  }
};

export default getAllReviewsByCourseId;
