import getAllReviewsByCourseId from "@/api/reviews/getAllReviewsByCourseId";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UserCourseReview from "@/pages/ViewCoursePageInfo/ReviewsSection/UserCourseReview/UserCourseReview";
import { MdSearch, MdOutlineStarHalf } from "react-icons/md";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Loader from "@/components/Loader/Loader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Review } from "@/types/types";

const ReviewsTab = ({ avgRating = 1 }) => {
  if (!avgRating) {
    return;
    <div></div>;
  }
  const params = useParams();
  let courseId: string | undefined = params.courseId;

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews", courseId],
    queryFn: () => getAllReviewsByCourseId((courseId || "")),
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center justify-between">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <IoIosStar key={i} className="text-[#c4710d] ml-1" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <MdOutlineStarHalf key={i} className="text-[#c4710d] ml-1" />
            );
          } else {
            return <IoIosStarOutline key={i} className="text-[#c4710d] ml-1" />;
          }
        })}
      </div>
    );
  };
  const limit = data?.length || 0;

  return (
    <div className="min-w-fit mt-4">
      {/* Student Feedback Section */}
      <h2 className="text-3xl font-bold my-4">Student feedback</h2>
      <div className="mb-6 flex flex-col py-2">
        <div className="flex  flex-row items-center min-w-full gap-5 p-4 ">
          <div className="flex flex-col w-full justify-center items-center ">
            <div className="text-7xl font-bold w-fit text-[#c4710d] ">
              {avgRating.toFixed(1)}
            </div>
            <div className=" text-lg  ">{renderStars(avgRating)}</div>
            <span className=" text-lg font-semibold text-[#c4710d]">
              Course Rating
            </span>
          </div>

          <div className="space-y-2 p-4">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count =
                data?.filter((review) => Math.round(review.rating) === stars)
                  .length || 0;
              const percentage = data?.length
                ? ((count / data.length) * 100).toFixed(1)
                : 0;

              return (
                <div key={stars} className="flex  items-center">
                  <div className="min-w-[720px]  bg-gray-200  mx-2 relative">
                    <div
                      className="h-2 bg-[#9194AC] "
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div >
                  <div className="flex items-center gap-3 flex-row-reverse ">
                  <span className="text-sm font-semibold underline text-[#6D28D2]">
                    {percentage}%
                  </span>
                  <div className="">{renderStars(stars)}</div>
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <form className="flex flex-row items-center gap-2 mb-6">
        {/* Search Input */}
        <Input
          placeholder="Search reviews"
          type="text"
          className="bg-white min-w-[744px] min-h-[48px] focus:outline-none px-4 border border-black rounded-sm text-lg"
        />

        {/* Search Button */}
        <Button className="bg-[#6D28D2] hover:bg-[#7551a7] px-4 min-h-[48px] ">
          <MdSearch className="text-black" />
        </Button>

        {/* Dropdown Filter */}
        <select
          className="bg-white border border-black rounded-sm px-4 min-h-[48px] text-lg focus:outline-none"
          defaultValue="all"
        >
          <option value="all">All ratings</option>
          <option value="5">Five stars</option>
          <option value="4">Four stars</option>
          <option value="3">Three stars</option>
          <option value="2">Two stars</option>
          <option value="1">One star</option>
        </select>
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
            {data.map((review: Review) => (
              <UserCourseReview
                review={review}
                key={review._id}
                widthOfReview={`w-full`}
              />
            ))}
          </div>
          <div className="w-full mt-4">
            <Button
              className={`${
                data.length < limit ? "hidden" : "block"
              } bg-white text-black rounded-[0.2em] border border-black font-bold w-full`}
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
