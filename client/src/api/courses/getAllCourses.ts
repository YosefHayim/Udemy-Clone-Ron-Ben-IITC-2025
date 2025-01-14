import axios from "axios";
import { axiosClient, baseUrl } from "../configuration";

const getAllCourses = async (
  searchTerm: string,
  limit: number = 18,
  page: number = 1
) => {
  if (!searchTerm) {
    console.error("Search term is required");
    return null;
  }

  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const url = `${baseUrl}/api/course/?search=${encodedSearchTerm}&page=${page}&limit=${limit}`;

  try {
    const { data } = await axiosClient.get(url);

    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export default getAllCourses;
