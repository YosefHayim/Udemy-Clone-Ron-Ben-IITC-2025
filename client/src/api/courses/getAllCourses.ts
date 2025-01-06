import axios from "axios";
import { baseUrl, localhostUrl } from "../baseUrl";

const getAllCourses = async (searchTerm: String) => {
  try {
    const response = await axios.get(
      `${localhostUrl}/api/course/?courseName=${searchTerm}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching courses", error);
    throw error;
  }
};

export default getAllCourses;
