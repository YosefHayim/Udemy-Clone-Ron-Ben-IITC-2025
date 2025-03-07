import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (
  searchTerm: string,
  limit: number,
  page: number,
  filterData?: {}
) => Promise<any>;

const getAllCourses: fn = async (
  searchTerm = "",
  filterData = {},
  limit = 13,
  page = 1
) => {
  if (!searchTerm) {
    console.log("Search term is required");
    return "";
  }

  const {
    sortBy = "",
    handsOnPractice = "",
    language = new Set(),
    levels = new Set(),
    price = null,
    ratings = "",
    subtitles = new Set(),
    topics = new Set(),
    videosDurations = new Set(),
    certificateOnly = "",
  } = filterData;

  const encodedSearchTerm = encodeURIComponent(searchTerm);

  // Safely convert Set to strings if they exist
  const languageStr = language.size ? Array.from(language).join(",") : "";
  const levelsStr = levels.size ? Array.from(levels).join(",") : "";
  const topicsStr = topics.size ? Array.from(topics).join(",") : "";
  const subtitlesStr = subtitles.size ? Array.from(subtitles).join(",") : "";
  const videosDurationsStr = videosDurations.size
    ? Array.from(videosDurations).join(",")
    : "";

  // Construct query string, including only valid parameters
  const url =
    `${localhostUrl}/api/course/?search=${encodedSearchTerm}` +
    (price === "Free" ? `&courseDiscountPrice=0` : "") + // Fix for free courses
    (price === "Paid" ? `&courseDiscountPrice[gte]=0.01` : "") + // Fix for paid courses
    (ratings ? `&averageRating[gte]=${ratings}` : "") +
    (languageStr ? `&courseLanguages=${languageStr}` : "") +
    (certificateOnly ? `&certificateOnly=${certificateOnly}` : "") +
    (levelsStr ? `&courseLevel=${levelsStr}` : "") +
    (topicsStr ? `&courseTopic=${topicsStr}` : "") +
    (videosDurationsStr
      ? `&totalCourseDuration[gte]=${videosDurationsStr}`
      : "") +
    (sortBy ? `&sort=${sortBy}` : "") +
    `&page=${page}&limit=${limit}`;

  try {
    const { data } = await axiosClient.get(url);

    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    console.log("Error fetching courses:", error);
    throw error;
  }
};

export default getAllCourses;
