import getAllReviewsByCourseId from "@/api/reviews/getAllReviewsByCourseId";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";
import UserCourseReview from "@/pages/ViewCoursePageInfo/ReviewsSection/UserCourseReview/UserCourseReview";
import { MdSearch, MdStar } from "react-icons/md";
import Loader from "@/components/Loader/Loader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Review } from "@/types/types";

const DialogOfAllReviews: React.FC<{
  avgRating: string;
  isClicked: boolean;
  setClicked: (value: boolean) => void;
}> = ({ avgRating, isClicked, setClicked }) => {
  const params = useParams();
  const courseId: string | undefined = params.courseId;
  const [limit, setLimit] = useState<number>(13);
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews", courseId],
    queryFn: () => {
      if (!courseId) {
        throw new Error("Course ID is undefined");
      }
      return getAllReviewsByCourseId(courseId);
    },
    enabled: isClicked, // Prevent fetching until dialog is opened
  });

  // Function to load more reviews
  const handleLoadMoreReviews = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Dialog open={isClicked} onOpenChange={setClicked}>
        <DialogContent className="z-[2000]">
          <DialogHeader>
            <DialogTitle>
              <div className="flex flex-row items-center justify-start">
                <MdStar className="text-[#c4710d]" />
                <b>{avgRating} course rating</b>
                <p>
                  <LuDot className="text-[2em]" />
                </p>
                <b>{data && data.length} ratings</b>
              </div>
            </DialogTitle>
            <DialogDescription>
              {isLoading && <Loader hSize="" useSmallLoading={false} />}
              {error && (
                <div className="text-red-500">
                  Error loading reviews. Please try again later.
                </div>
              )}
              {data && (
                <div className="flex flex-row items-start justify-between w-full">
                  <div>
                    {/* Star progress bars */}
                    {/* Add your star progress bar implementation here */}
                    <form className="flex flex-row items-center justify-center gap-[0.5em]">
                      <Input
                        placeholder="Search reviews"
                        type="text"
                        className="border border-black focus:outline-none"
                      />
                      <Button className="border border-black hover:bg-[#1739531f] py-[0.5em] px-[0.7em] bg-white">
                        <MdSearch className="text-black" />
                      </Button>
                    </form>
                  </div>
                  <div className="overflow-y-auto h-[650px] w-2/3">
                    {data.map((review: Review) => (
                      <UserCourseReview
                        review={review}
                        key={review._id}
                        widthOfReview={`w-full`}
                      />
                    ))}
                    <div className="w-full mt-[2em]">
                      <Button
                        className={`${
                          data.length < 13 ? "hidden" : "block"
                        } bg-white text-black rounded-[0.2em] border border-black font-bold w-full`}
                        onClick={handleLoadMoreReviews} // Update page on click
                      >
                        Show more reviews
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogOfAllReviews;
