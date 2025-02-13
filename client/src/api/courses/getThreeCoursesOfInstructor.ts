import { axiosClient } from "../configuration";

const getThreeCoursesOfInstructor = async (instructorId: string) => {
  if (!instructorId) {
    console.log(`No instructorId provided: `, instructorId);
  }

  try {
    const url = `http://localhost:3000/api/instructor/${instructorId}/three/courses`;
    const res = await axiosClient.get(url);

    if (res) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error for getting 3 courses: ", error);
  }
};

export default getThreeCoursesOfInstructor;
