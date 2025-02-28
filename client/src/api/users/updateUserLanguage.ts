import { axiosClient, localhostUrl } from "../configuration";

const updateUserLanguage = async (preferredLanguage: string) => {
  if (!preferredLanguage) {
    console.warn("Invalid language input:", preferredLanguage);
    return null;
  }

  console.log(preferredLanguage);

  const url = `${localhostUrl}/api/user`;
  try {
    const response = await axiosClient.put(url, preferredLanguage);

    if (response.status === 200) {
      console.log("Language update successful:", response.data);
      return response.data;
    } else {
      console.warn("Unexpected response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error updating user language:", error);
    return null;
  }
};

export default updateUserLanguage;
