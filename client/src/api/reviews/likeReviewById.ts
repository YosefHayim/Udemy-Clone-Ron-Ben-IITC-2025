import { axiosClient, baseUrl, localhostUrl } from "../configuration";

export const likeReviewById = async (idOfReview: unknown) => {
  if (!idOfReview || typeof idOfReview !== "string") {
    console.error(`Invalid reviewId: ${idOfReview}`);
    return;
  }
  const sanitizedReviewId = idOfReview.trim();
  const url = `${localhostUrl}/api/review/like/${sanitizedReviewId}`;
  try {
    const res = await axiosClient.post(url);

    if (res) {
      console.log(res);
      return res;
    }
  } catch (error) {
    console.error(`Error occurred during like a review: `, error);
  }
};
