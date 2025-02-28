import { axiosClient, localhostUrl } from "../configuration";

const updateUserLanguage = async (language: string) => {
  if (!language) {
    console.warn("Invalid language input:", language);
    return null;
  }

  const url = `${localhostUrl}/api/user`;
  try {
    const response = await axiosClient.patch(url, {
      preferredLanguage: language,
    });

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
