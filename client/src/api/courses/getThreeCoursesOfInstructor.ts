import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const getThreeCoursesOfInstructor = async (instructorId: string) => {
  if (!instructorId) throw new Error("Please provide instructorId in url.");

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/instructor/${instructorId}/three/courses`;
    const r = await axiosClient.get(url);

    if (r) {
      console.log(r);
      return r?.data?.data;
    }
  } catch (error) {
    console.log("Error for getting 3 courses: ", error);
    throw error;
  }
};

export default getThreeCoursesOfInstructor;
