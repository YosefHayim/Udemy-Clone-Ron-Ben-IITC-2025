import { axiosClient, baseUrl } from "../configuration";

const reportUserReviewByReviewId = async (reviewId: string) => {
  if (!reviewId || typeof reviewId !== "string") {
    throw new Error("Invalid review ID provided.");
  }

  const sanitizedCourseId = reviewId.trim();
  if (!sanitizedCourseId) {
    throw new Error("Invalid review ID provided after sanitization.");
  }

  const url = `${baseUrl}/api/report/review/${sanitizedCourseId}`;

  try {
    const response = await axiosClient.post(url);

    if (response && response.data) {
      return response.data; // Return response data to the caller
    }

    console.warn("No review data found in the response.");
    return null; // Explicitly return null if no data is available
  } catch (error) {
    console.error(
      `Error reporting review with ID ${sanitizedCourseId}:`,
      error.message
    );
    throw new Error("Failed to report review. Please try again.");
  }
};

export default reportUserReviewByReviewId;
