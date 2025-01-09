import axios from "axios";
import { baseUrl } from "../baseUrl";

const getCourseById = async (courseId) => {
  if (!courseId) {
    return null;
  }

  const sanitizedCourseId = courseId.trim().replace(/^:/, "");
  const url = `${baseUrl}/api/course/${sanitizedCourseId}`;

  try {
    const { data } = await axios.get(url);

    if (data) {
      console.log(data.data);
      return data.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export default getCourseById;
