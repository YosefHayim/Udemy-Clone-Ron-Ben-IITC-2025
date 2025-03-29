import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const updateUserLanguage = async (preferredLanguage: string) => {
  if (!preferredLanguage) throw new Error("Please provide preferredLanguage in url.");

  const url = `${isProduction ? baseUrl : localhostUrl}/api/user`;
  try {
    const r = await axiosClient.put(url, preferredLanguage);

    if (r) {
      console.log(r.data);
      return r.data;
    }
  } catch (error) {
    console.log(`error occurred durning updateUserLanguage`, error.response.data.message);
    throw error;
  }
};

export default updateUserLanguage;
