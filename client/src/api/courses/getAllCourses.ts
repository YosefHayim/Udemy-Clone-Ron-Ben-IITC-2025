import axios from "axios";
import { baseUrl } from "../baseUrl";

const getAllCourses = async (searchTerm: String) => {
  console.log(searchTerm);

  try {
    const response = await axios.get(`${baseUrl}/api/course/?sort=courseName`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching courses", error);
    throw error;
  }
};

export default getAllCourses;
