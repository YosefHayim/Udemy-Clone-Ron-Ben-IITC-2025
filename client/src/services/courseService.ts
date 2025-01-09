// src/api/courseApi.ts
export const fetchCourseById = async (id: string) => {
  try {
    const response = await fetch(`https://udemy-clone-ron-ben.onrender.com/api/course/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch course with ID ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
