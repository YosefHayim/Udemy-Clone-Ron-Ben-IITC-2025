import { axiosClient, localhostUrl } from "../configuration";

type fn = (courseId: string) => Promise<any>;

const byCourseByCourseId: fn = async (courseId: string) => {
  if (!courseId || typeof courseId !== "string") {
    console.error("Invalid course ID provided.");
    return null;
  }

  const sanitizedCourseId = courseId.trim();
  console.log(courseId);
  const url = `${localhostUrl}/api/user/add/course/${sanitizedCourseId}`;
  console.log(url);

  try {
    const response = await axiosClient.post(url);

    if (response?.data?.data) {
      console.log(response);

      return response.data.data;
    }

    console.warn("No course data found in the response.");
    return null;
  } catch (error) {
    console.error(`Error fetching course with ID ${sanitizedCourseId}:`, error);
    throw error;
  }
};

export default byCourseByCourseId;
