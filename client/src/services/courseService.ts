import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const fetchCourseById = async (id: string) => {
  if (!id || typeof id !== "string") {
    console.error("Invalid course ID:", id);
    throw new Error("Invalid course ID");
  }

  const sanitizedId = id.trim().replace(/^:/, ""); // Remove leading colon, if any

  try {
    const response = await axios.get(`${API_BASE_URL}/course/${sanitizedId}`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching course data:", {
      message: error.message,
      response: error.response?.data,
    });
    throw error;
  }
};
