import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

const getRatingStatsBySearch = async (searchTerm: string) => {
  if (!searchTerm) console.log("Search term is missing!");

  const url = `${isProduction ? baseUrl : localhostUrl}/api/course/rating-stats`;
  try {
    const r = await axiosClient.get(url, {
      params: { search: searchTerm },
    });

    if (r) {
      console.log(r.data);
      return r.data;
    }
  } catch (error) {
    console.log(`Error occurred durning getting rating stats by: `, error.response.data.message);
    throw error;
  }
};

export default getRatingStatsBySearch;
