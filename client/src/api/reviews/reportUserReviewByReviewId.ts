import { axiosClient, baseUrl, localhostUrl } from "../configuration";

const reportUserReviewByReviewId = async ({
  reviewId,
  issueType,
  issueDetails,
  userId,
}) => {
  if (!reviewId || typeof reviewId !== "string") {
    throw new Error("Invalid review ID provided.");
  }

  const sanitizedReviewId = reviewId.trim().toString();
  if (!sanitizedReviewId) {
    throw new Error("Invalid review ID provided after sanitization.");
  }

  const url = `${localhostUrl}/api/report/review/${sanitizedReviewId}`;

  try {
    const payload = { issueType, issueDetails, userId };
    const response = await axiosClient.post(url, payload);

    if (response) {
      console.log(response);
      return response;
    }

    console.warn("No review data found in the response.");
    return null;
  } catch (error: any) {
    console.error(
      `Error reporting review with ID ${sanitizedReviewId}:`,
      error.message
    );
    throw new Error("Failed to report review. Please try again.");
  }
};

export default reportUserReviewByReviewId;
