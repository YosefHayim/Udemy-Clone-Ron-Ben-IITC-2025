import axios from "axios";
import { baseUrl } from "../baseUrl";

const getAllCourses = async (
  searchTerm = null,
  limit = null,
  pageNumber = null
) => {
  if (!searchTerm) {
    return;
  }

  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const url = `${baseUrl}/api/course/?search=${encodedSearchTerm}&page=${pageNumber}&limit=${limit}&fields=courseName,courseInstructor,_id,courseImg,courseFullPrice,courseDiscountPrice,courseTag,courseLevel,totalCourseDuration,totalCourseLessons`;
  console.log(url);

  try {
    const { data } = await axios.get(url);

    if (data) {
      console.log(data);
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
