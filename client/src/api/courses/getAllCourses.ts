import { axiosClient, baseUrl } from "../configuration";

type fn = (searchTerm: string, limit: number, page: number) => Promise<any>;

const getAllCourses: fn = async (searchTerm = "", limit = 18, page = 1) => {
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
