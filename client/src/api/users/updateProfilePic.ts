import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const updateProfilePic = async (photo: File) => {
  try {
    const url = `${localhostUrl}/api/user/profile/picture`;
    const formData = new FormData();
    formData.append("photo", photo); // Ensure the key matches the backend expectation

    const res = await axiosClient.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res) {
      console.log(res.data);
      return res;
    }
  } catch (error) {
    console.log("Error occurred during profile picture update:", error);
  }
};

export default updateProfilePic;
