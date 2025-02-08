import { axiosClient, localhostUrl } from "../configuration";

const getInstructorById = async (instructorId: string) => {
  console.log(instructorId);

  if (!instructorId) {
    return;
  }

  try {
    const url = `${localhostUrl}/api/instructor/${instructorId}`;

    const res = await axiosClient.get(url);

    if (res) {
      return res.data.data;
    }
  } catch (error) {
    console.error(
      `Error has been occurred durning getting instructor information: `,
      error
    );
  }
};

export default getInstructorById;
