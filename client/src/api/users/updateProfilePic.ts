import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const updateProfilePic = async (photo: File) => {
  if (!photo) throw new Error("Please provide personalizeField in url.");

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/user/profile/picture`;
    const formData = new FormData();
    formData.append("photo", photo);

    const r = await axiosClient.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (r) {
      console.log(r.data.data);
      return r;
    }
  } catch (error) {
    console.log("Error occurred during profile picture update:", error.response.data.message);
    throw error;
  }
};

export default updateProfilePic;
