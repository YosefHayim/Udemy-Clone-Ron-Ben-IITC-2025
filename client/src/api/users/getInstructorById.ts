import { axiosClient, baseUrl, isProduction, localhostUrl } from '../configuration';

const getInstructorById = async (instructorId: string) => {
  console.log(instructorId);

  if (!instructorId) {
    return;
  }

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/user/${instructorId}`;

    const res = await axiosClient.get(url);

    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(`Error has been occurred durning getting instructor information: `, error);
  }
};

export default getInstructorById;
