const getUserData = async (access_token: string) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );

  // console.log("response", response);
  const data = await response.json();
  // console.log("data", data);
};

export default getUserData;
