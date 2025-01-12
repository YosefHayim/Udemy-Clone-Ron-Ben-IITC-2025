import axios from "axios";

const loginUser = async (credentials: string) => {
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.post(
      "https://udemy-clone-ron-ben.onrender.com/api/user/auth/login",
      credentials
    );

    return response.data;
  } catch (error) {
    console.error(`Error occurred durning the login of user: `, error);
  }
};

export default loginUser;
