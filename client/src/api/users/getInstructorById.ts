import {
  axiosClient,
  baseUrl,
  isProduction,
  localhostUrl,
} from "../configuration";

const getInstructorById = async (instructorId: string) => {
  console.log(instructorId);

  if (!instructorId) {
    return;
  }

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/instructor/${instructorId}`;

    const res = await axiosClient.get(url);

    if (res) {
      console.log(res.data.data);

      return res.data.data;
    }
  } catch (error) {
    console.log(
      `Error has been occurred durning getting instructor information: `,
      error,
    );
  }
};

export default getInstructorById;
