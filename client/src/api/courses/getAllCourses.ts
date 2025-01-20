import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (searchTerm: string, limit: number, page: number) => Promise<any>;

const getAllCourses: fn = async (searchTerm = "") => {
  if (!searchTerm) {
    console.error("Search term is required");
    return "";
  }

  // console.log(searchTerm);

  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const url = `${localhostUrl}/api/course/?search=${encodedSearchTerm}`;

  try {
    const { data } = await axiosClient.get(url);

    if (data) {
      // // console.log(data);

      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export default getAllCourses;
