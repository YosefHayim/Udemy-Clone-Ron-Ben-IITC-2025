import { GoogleAuthResponse } from "@/types/types";
import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const googleAuth = async (): Promise<GoogleAuthResponse> => {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      throw new Error("No code found in the URL.");
    }

    const url = `${localhostUrl}/api/user/auth/google/callback`;

    const response = await axiosClient.post<GoogleAuthResponse>(url, { code });

    if (response) {
      // console.log("Tokens and user data:", response.data);
      return response.data; // Return tokens and user data
    }

    throw new Error("Unexpected response format.");
  } catch (error) {
    console.error("Error occurred during Google auth:", error);
    throw error; // Re-throw error to handle in `react-query`
  }
};

export default googleAuth;
