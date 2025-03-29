import { personalizeFieldPayload } from "../../types/types";
import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const updatePersonalizeUserField = async (personalizeField: personalizeFieldPayload) => {
  if (!personalizeField) throw new Error("Please provide personalizeField in url.");

  try {
    const url = `${isProduction ? baseUrl : localhostUrl}/api/user/updatePersonalizeField`;
    const r = await axiosClient.put(url, personalizeField);

    if (r) {
      console.log(r.data);
      return r.data;
    }
  } catch (error) {
    console.log("Error in updatePersonalizeUserField", error.response.data.message);
    throw error;
  }
};

export default updatePersonalizeUserField;
