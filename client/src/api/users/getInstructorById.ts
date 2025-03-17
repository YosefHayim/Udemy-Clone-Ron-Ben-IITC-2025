import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const getInstructorById = async (instructorId: string) => {
  console.log(instructorId);

  if (!instructorId) {
    return;
  }

  try {
    const url = `${baseUrl}/api/instructor/${instructorId}`;

    const res = await axiosClient.get(url);

    if (res) {
      console.log(res);

      return res.data.data;
    }
  } catch (error) {
    console.log(
      `Error has been occurred durning getting instructor information: `,
      error
    );
  }
};

export default getInstructorById;
