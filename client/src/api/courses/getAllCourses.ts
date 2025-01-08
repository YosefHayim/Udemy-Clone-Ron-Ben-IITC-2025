import axios from "axios";
import { baseUrl } from "../baseUrl";

const getAllCourses = async (searchTerm: String) => {
  if (!searchTerm) {
    return;
  }

  try {
    const { data } = await axios.get(
      `${baseUrl}/api/course/?search=${searchTerm}&limit=13&fields=courseName,courseInstructor,_id,courseImg,courseFullPrice,courseDiscountPrice,courseTag,courseLevel,totalCourseDuration,totalCourseLessons`
    );

    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching courses", error);
    throw error;
  }
};

export default getAllCourses;
