import { axiosClient, baseUrl, localhostUrl } from "../configuration";

type fn = (idOfReview: string) => Promise<any>;

export const likeReviewById: fn = async (idOfReview: string) => {
  if (!idOfReview || typeof idOfReview !== "string") {
    console.log(`Invalid reviewId: ${idOfReview}`);
    return;
  }
  const sanitizedReviewId = idOfReview.trim();
  const url = `${baseUrl}/api/review/like/${sanitizedReviewId}`;
  try {
    const res = await axiosClient.post(url);

    if (res) {
      return res;
    }
  } catch (error) {
    console.log(`Error occurred during like a review: `, error);
  }
};
