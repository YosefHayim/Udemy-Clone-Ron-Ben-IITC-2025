import { axiosClient, localhostUrl } from "../configuration";

const getThreeCoursesOfInstructor = async (instructorId: string) => {
  if (!instructorId) {
    console.log(`No instructorId provided: `, instructorId);
  }

  try {
    const url = `${localhostUrl}/api/instructor/${instructorId}/three/courses`;
    const res = await axiosClient.get(url);

    if (res) {
      return res.data.data;
    }
  } catch (error) {
    console.log("Error for getting 3 courses: ", error);
  }
};

export default getThreeCoursesOfInstructor;
