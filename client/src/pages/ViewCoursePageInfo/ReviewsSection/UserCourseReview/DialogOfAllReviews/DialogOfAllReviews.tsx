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
import { Review } from "@/types/types";

const DialogOfAllReviews: React.FC<{
  avgRating: number;
  isClicked: boolean;
  setClicked: (value: boolean) => void;
}> = ({ avgRating, isClicked, setClicked }) => {
  const params = useParams();
  const courseId: string | undefined = params.courseId;

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
                <div className="flex w-full flex-row items-start justify-between gap-[1em]">
                  <div>
                    {/* Star progress bars */}
                    {/* Add your star progress bar implementation here */}
                    <form className="flex flex-row items-center justify-center gap-[0.5em]">
                      <Input
                        placeholder="Search reviews"
                        type="text"
                        className="border border-black focus:outline-none"
                      />
                      <Button className="border border-black bg-white px-[0.7em] py-[0.5em] hover:bg-hoverDivGray focus:outline-none">
                        <MdSearch className="text-black" />
                      </Button>
                    </form>
                  </div>
                  <div className="h-[650px] w-2/3 overflow-y-auto">
                    {data.map((review: Review) => (
                      <UserCourseReview
                        review={review}
                        key={review._id}
                        widthOfReview={`w-full`}
                      />
                    ))}
                    <div className="mt-[2em] w-full">
                      <Button
                        className={`${
                          data.length < 13 ? "hidden" : "block"
                        } w-full rounded-[0.2em] border border-black bg-white font-sans font-extrabold text-black`}
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
