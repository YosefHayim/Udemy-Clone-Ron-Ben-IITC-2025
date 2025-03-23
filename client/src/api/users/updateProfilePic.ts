import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const updateProfilePic = async (photo: File) => {
  if (!photo) console.log(`No photo provided to update`);

  try {
    const url = `${process.env.NODE === "production" ? `${baseUrl}` : `${localhostUrl}`}/api/user/profile/picture`;
    const formData = new FormData();
    formData.append("photo", photo);

    const res = await axiosClient.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res) {
      console.log(res);
      return res;
    }
  } catch (error) {
    console.log("Error occurred during profile picture update:", error);
  }
};

export default updateProfilePic;
