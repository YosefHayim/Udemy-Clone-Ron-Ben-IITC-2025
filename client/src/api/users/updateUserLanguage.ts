import { axiosClient, baseUrl, isProduction, localhostUrl } from '../configuration';

const updateUserLanguage = async (preferredLanguage: string) => {
  if (!preferredLanguage) {
    return undefined;
  }

  const url = `${isProduction ? baseUrl : localhostUrl}/api/user`;
  try {
    const response = await axiosClient.put(url, preferredLanguage);

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
  }
};

export default updateUserLanguage;
