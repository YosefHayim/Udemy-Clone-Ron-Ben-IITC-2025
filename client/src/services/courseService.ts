import axios from "axios";

const API_BASE_URL = "https://udemy-clone-ron-ben.onrender.com/api";

export const fetchCourseById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/course/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error;
  }
};
