import axios from "axios";
import { baseUrl } from "../baseUrl";

const getCourseProsById = async (courseId) => {
  if (!courseId || typeof courseId !== "string") {
    console.error("Invalid course ID provided.");
    return null;
  }

  const sanitizedCourseId = courseId.trim();
  const url = `${baseUrl}/api/course/pros/${sanitizedCourseId}`;

  try {
    const response = await axios.get(url);

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

export default getCourseProsById;
