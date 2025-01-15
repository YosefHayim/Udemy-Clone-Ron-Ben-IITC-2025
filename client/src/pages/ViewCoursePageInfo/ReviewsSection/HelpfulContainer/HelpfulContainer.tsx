import { dislikeReviewById } from "@/api/reviews/dislikeReviewById";
import { likeReviewById } from "@/api/reviews/likeReviewById";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const HelpfulContainer = ({ idOfReview }) => {
  console.log(idOfReview);

  const [isClickedLike, setClickedLike] = useState(false);
  const [isDisLike, setDisLike] = useState(false);

  const likeMutation = useMutation({
    mutationFn: likeReviewById,
    onError: (error) => {
      console.error("Error liking review:", error);
    },
  });

  const disLikeMutation = useMutation({
    mutationFn: dislikeReviewById,
    onError: (error) => {
      console.error("Error disliking review:", error);
    },
  });

  const handleLike = () => {
    if (!isClickedLike) {
      // Toggle on like and toggle off dislike
      setClickedLike(true);
      setDisLike(false);

      // Call like API
      likeMutation.mutate(idOfReview);
    } else {
      // Toggle off like
      setClickedLike(false);

      // Optionally handle unlike in the backend
    }
  };

  const handleDislike = () => {
    if (!isDisLike) {
      // Toggle on dislike and toggle off like
      setDisLike(true);
      setClickedLike(false);

      // Call dislike API
      disLikeMutation.mutate(idOfReview);
    } else {
      // Toggle off dislike
      setDisLike(false);

      // Optionally handle undislike in the backend
    }
  };

  return (
    <div className="flex flex-row items-start justify-start gap-[1em]">
      <p>Helpful?</p>
      <div onClick={handleLike} className="cursor-pointer">
        {isClickedLike ? <BiSolidLike /> : <BiLike />}
      </div>
      <div className="cursor-pointer" onClick={handleDislike}>
        {isDisLike ? <BiSolidDislike /> : <BiDislike />}
      </div>
    </div>
  );
};

export default HelpfulContainer;
