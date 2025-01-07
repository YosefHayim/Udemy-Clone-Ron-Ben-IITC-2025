import axios from "axios";
import { baseUrl } from "../baseUrl";

const getAllCourses = async (searchTerm: String) => {
  if (!searchTerm) {
    return;
  }

  try {
    const { data } = await axios.get(
      `${baseUrl}/api/course/?search=${searchTerm}&limit=13&fields=courseName,courseInstructor,_id,courseImg`
    );
    console.log(data);

    return data.response;
  } catch (error) {
    console.error("Error fetching courses", error);
    throw error;
  }
};

export default getAllCourses;
