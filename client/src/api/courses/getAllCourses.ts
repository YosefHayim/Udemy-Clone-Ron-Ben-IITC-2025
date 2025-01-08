import axios from "axios";
import { baseUrl } from "../baseUrl";

const getAllCourses = async (searchTerm, limit = 18, page = 1) => {
  if (!searchTerm) {
    console.error("Search term is required");
    return null;
  }

  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const url = `${baseUrl}/api/course/?search=${encodedSearchTerm}&page=${page}&limit=${limit}`;

  try {
    const { data } = await axios.get(url);

    if (data) {
      console.log(data);
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export default getAllCourses;
