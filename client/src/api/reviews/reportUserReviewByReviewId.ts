import { axiosClient, baseUrl } from "../configuration";

const reportUserReviewByReviewId = async (reviewId: string) => {
  if (!reviewId || typeof reviewId !== "string") {
    console.error("Invalid review ID provided.");
    return null;
  }

  const sanitizedCourseId = reviewId.trim();
  const url = `${baseUrl}/api/report/review/${sanitizedCourseId}`;

  try {
    const response = await axiosClient.post(url);

    if (response?.data?.data) {
      return response.data.data;
    }

    console.warn("No review data found in the response.");
    return null;
  } catch (error) {
    console.error(`Error fetching course with ID ${sanitizedCourseId}:`, error);
    throw error;
  }
};

export default reportUserReviewByReviewId;
