import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (searchTerm: string, limit: number, page: number) => Promise<any>;

const getAllCourses: fn = async (
  searchTerm = "",
  filterData = {}, // Default to an empty object if not provided
  limit = 1,
  page = 1
) => {
  if (!searchTerm) {
    console.error("Search term is required");
    return "";
  }

  const {
    sortBy = "", // Default to an empty string if not provided
    handsOnPractice = "",
    language = "",
    levels = "",
    price = "",
    ratings = "",
    subtitles = "",
    topics = "",
    videosDurations = "",
    certificateOnly = "",
  } = filterData;

  const encodedSearchTerm = encodeURIComponent(searchTerm);

  // Construct query string, only including fields if they are not empty
  const url =
    `${localhostUrl}/api/course/?search=${encodedSearchTerm}` +
    (ratings ? `&averageRating[gte]=${ratings}` : "") +
    (language ? `&courseLanguages=${language}` : "") +
    (certificateOnly ? `&certificateOnly=${certificateOnly}` : "") +
    (levels ? `&courseLevel=${levels}` : "") +
    (topics ? `&courseTopic=${topics}` : "") +
    (videosDurations ? `&totalCourseDuration[gte]=${videosDurations}` : "") +
    (price ? `&courseFullPrice[lte]=${price}` : "") +
    (sortBy ? `&sort=${sortBy}` : "");

  try {
    const { data } = await axiosClient.get(url);

    if (data) {
      console.log(data);
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export default getAllCourses;
