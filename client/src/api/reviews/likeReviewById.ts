import { axiosClient, baseUrl, isProduction, localhostUrl } from "../configuration";

type fn = (idOfReview: string) => Promise<any>;

export const likeReviewById: fn = async (idOfReview: string) => {
  if (!idOfReview) throw new Error("Please provide idOfReview in url.");

  const sanitizedReviewId = idOfReview.trim();
  const url = `${isProduction ? baseUrl : localhostUrl}/api/review/like/${sanitizedReviewId}`;
  try {
    const r = await axiosClient.post(url);

    if (r) {
      console.log(r);
      return r;
    }
  } catch (error) {
    console.log(`Error occurred during like a review: `, error);
    throw error
  }
};
