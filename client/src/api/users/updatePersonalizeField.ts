import { personalizeFieldPayload } from "@/types/types";
import { axiosClient, localhostUrl } from "../configuration";

const updatePersonalizeUserField = async (
  personalizeField: personalizeFieldPayload
) => {
  if (!personalizeField) {
    return undefined;
  }

  try {
    const url = `${localhostUrl}/api/user/updatePersonalizeField`;
    const r = await axiosClient.put(url, personalizeField);

    if (r) {
      return r.data;
    }
  } catch (error) {
    console.log("Error in updatePersonalizeUserField", error);
  }
};

export default updatePersonalizeUserField;
