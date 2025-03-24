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
    queryFn: () => getAllReviewsByCourseId(courseId || ""),
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center justify-between">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <IoIosStar key={i} className="ml-1 text-[#c4710d]" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <MdOutlineStarHalf key={i} className="ml-1 text-[#c4710d]" />
            );
          } else {
            return <IoIosStarOutline key={i} className="ml-1 text-[#c4710d]" />;
          }
        })}
      </div>
    );
  };
  const limit = data?.length || 0;

  return (
    <div className="mt-4 min-w-fit">
      {/* Student Feedback Section */}
      <h2 className="my-4 font-sans text-3xl font-extrabold">
        Student feedback
      </h2>
      <div className="mb-6 flex flex-col py-2">
        <div className="flex  min-w-full  items-center gap-5 p-4 ">
          <div className="flex w-full flex-col items-center justify-center ">
            <div className="w-fit font-sans text-7xl font-extrabold text-[#c4710d] ">
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
                  <div className="relative  mx-2  min-w-[720px] bg-gray-200">
                    <div
                      className="h-2 bg-gray-600 "
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="-reverse flex items-center gap-3 ">
                    <span className="text-sm font-semibold text-btnColor underline">
                      {percentage}%
                    </span>
                    <div>{renderStars(stars)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <form className="mb-6 flex  items-center gap-2">
        {/* Search Input */}
        <Input
          placeholder="Search reviews"
          type="text"
          className="min-h-[48px] min-w-[744px] rounded-sm border border-black bg-white px-4 text-lg focus:outline-none"
        />

        {/* Search Button */}
        <Button className="min-h-[48px] bg-btnColor px-4 hover:bg-[#7551a7] focus:outline-none ">
          <MdSearch className="text-black" />
        </Button>

        {/* Dropdown Filter */}
        <select
          className="min-h-[48px] rounded-sm border border-black bg-white px-4 text-lg focus:outline-none"
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
        <div className="h-auto min-w-full overflow-y-auto">
          <div className="space-y-4">
            {data.map((review: Review) => (
              <UserCourseReview
                review={review}
                key={review._id}
                widthOfReview={`w-full`}
              />
            ))}
          </div>
          <div className="mt-4 w-full">
            <Button
              className={`${
                data.length < limit ? "hidden" : "block"
              } w-full rounded-[0.2em] border border-black bg-white font-sans font-extrabold text-black`}
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
