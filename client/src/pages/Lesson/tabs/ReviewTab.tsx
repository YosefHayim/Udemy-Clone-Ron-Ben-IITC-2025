import getAllReviewsByCourseId from "@/api/reviews/getAllReviewsByCourseId";
import { useQuery } from "@tanstack/react-query";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";
import UserCourseReview from "@/pages/ViewCoursePageInfo/ReviewsSection/UserCourseReview/UserCourseReview";
import { MdSearch, MdStar, MdOutlineStarHalf } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import Loader from "@/components/Loader/Loader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ReviewsTab = ({ avgRating }) => {
  const params = useParams();
  const courseId = params.courseId;
  const [limit] = useState(13); // Set the limit of reviews per page
  const [page, setPage] = useState(1); // Initialize page state

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews", courseId, page],
    queryFn: () =>
      getAllReviewsByCourseId(courseId, { limit, page }), // Fetch reviews with pagination
  });

  const handleLoadMoreReviews = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <IoIosStar key={i} className="text-[#c4710d] mr-1" />;
          } else if (i === fullStars && hasHalfStar) {
            return <MdOutlineStarHalf key={i} className="text-[#c4710d] mr-1" />;
          } else {
            return <MdStar key={i} className="text-gray-300 mr-1" />;
          }
        })}
      </div>
    );
  };

  return (
    <div className="min-w-fit mt-4">
        {/* Student Feedback Section */}
        <h2 className="text-2xl font-bold mb-4">Student feedback</h2>
      <div className="mb-6 flex flex-col">

        <div className="flex  flex-row  justify-between min-w-full ">
        <div className="flex flex-col items-center ">
          <div className="text-7xl max-w-min font-bold text-[#c4710d] ">
            {avgRating.toFixed(1)}
          </div>
          <div className="ml-4">{renderStars(avgRating)}</div>
          <span className="ml-4 text-lg text-[#c4710d] font-semibold">Course Rating</span>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = data?.filter(
              (review) => Math.round(review.rating) === stars
            ).length || 0;
            const percentage = data?.length
              ? ((count / data.length) * 100).toFixed(1)
              : 0;

            return (
              <div key={stars} className="flex items-center">
                <div className="flex items-center">
                  {renderStars(stars)}
                </div>
                <div className="min-w-80  bg-gray-200 rounded-full mx-2 relative">
                  <div
                    className="h-2 bg-[#c4710d] rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {percentage}% 
                </span>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      {/* Reviews Section */}
      <form className="flex flex-row items-center gap-2 mb-6">
        <Input
          placeholder="Search reviews"
          type="text"
          className="bg-white min-w-[744px] min-h-[48px] focus:outline-none px-4 border border-black rounded-sm text-lg"
        />
        <Button className="border border-black hover:bg-[#1739531f] px-4 min-h-[48px] bg-white">
          <MdSearch className="text-black" />
        </Button>
      </form>
      {isLoading && <Loader />}
      {error && (
        <div className="text-red-500">
          Error loading reviews. Please try again later.
        </div>
      )}
      {data && (
        <div className="overflow-y-auto min-w-full h-auto">
          <div className="space-y-4">
            {data.map((review) => (
              <UserCourseReview
                review={review}
                key={review._id}
                widthOfReview={`w-full`}
              />
            ))}
          </div>
          <div className="w-full mt-4">
            <Button
              className={`$ {
                data.length < limit ? "hidden" : "block"
              } bg-white text-black rounded-[0.2em] border border-black font-bold w-full`}
              onClick={handleLoadMoreReviews}
            >
              Show more reviews
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
