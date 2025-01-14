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
import Loader from "../Loader/Loader";
import UserCourseReview from "@/pages/ViewCoursePageInfo/ReviewsSection/UserCourseReview/UserCourseReview";
import { Button } from "../ui/button";
import { MdOutlineStarPurple500, MdSearch } from "react-icons/md";
import { Input } from "../ui/input";

const DialogOfAllReviews = ({ avgRating, isClicked, setClicked }) => {
  const params = useParams();
  const courseId = params.courseId;

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews", courseId],
    queryFn: () => getAllReviewsByCourseId(courseId),
    enabled: isClicked, // Prevent fetching until dialog is opened
  });

  return (
    <Dialog open={isClicked} onOpenChange={setClicked}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row items-center justify-start">
              {avgRating} course rating <LuDot /> 3K ratings
            </div>
          </DialogTitle>
          <DialogDescription>
            {isLoading && <Loader />}
            {error && (
              <div className="text-red-500">
                Error loading reviews. Please try again later.
              </div>
            )}
            {data && (
              <div className="flex flex-row items-start justify-between w-full">
                <div>
                  <div className="flex flex-col items-start justify-start gap-[1em] my-[2em]">
                    <div className="flex flex-row items-center justify-start">
                      <progress value={20} max={100}></progress>
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <MdOutlineStarPurple500
                            key={index}
                            className="text-[#f69c08]"
                          />
                        ))}
                      <p className="underline text-[#6d28d2]">1%</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.1em]">
                      <progress value={20} max={100}></progress>
                      {Array(4)
                        .fill(null)
                        .map((_, index) => (
                          <MdOutlineStarPurple500
                            key={index}
                            className="text-[#f69c08]"
                          />
                        ))}
                      <p className="underline text-[#6d28d2]">1%</p>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <progress value={20} max={100}></progress>
                      {Array(3)
                        .fill(null)
                        .map((_, index) => (
                          <MdOutlineStarPurple500
                            key={index}
                            className="text-[#f69c08]"
                          />
                        ))}
                      <p className="underline text-[#6d28d2]">1%</p>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <progress value={20} max={100}></progress>
                      {Array(2)
                        .fill(null)
                        .map((_, index) => (
                          <MdOutlineStarPurple500
                            key={index}
                            className="text-[#f69c08]"
                          />
                        ))}
                      <p className="underline text-[#6d28d2]">1%</p>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <progress value={20} max={100}></progress>
                      {Array(1)
                        .fill(null)
                        .map((_, index) => (
                          <MdOutlineStarPurple500
                            key={index}
                            className="text-[#f69c08]"
                          />
                        ))}
                      <p className="underline text-[#6d28d2]">1%</p>
                    </div>
                  </div>
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
                <div className="overflow-y-auto h-[600px] w-2/3">
                  {data.map((review) => (
                    <UserCourseReview
                      review={review}
                      key={review._id}
                      widthOfReview={`w-full`}
                    />
                  ))}
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogOfAllReviews;
