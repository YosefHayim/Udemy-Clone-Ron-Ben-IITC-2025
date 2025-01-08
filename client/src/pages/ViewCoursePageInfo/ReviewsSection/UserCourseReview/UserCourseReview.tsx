import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CourseRating from "../../CourseRating/CourseRating";
import { SlOptionsVertical } from "react-icons/sl";
import { BiDislike, BiLike } from "react-icons/bi";

const UserCourseReview = () => {
  return (
    <div className="flex flex-col gap-[1em] w-[300px]">
      <hr className="my-[0.5em]" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-start justify-start gap-[1em]">
          <div>
            <Avatar>
              <AvatarImage src="httpss://github.com/shadcn.png" />
              <AvatarFallback className="bg-black font-bold text-white">
                CN
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div>
              <b>Prakash K.</b>
              <div className="flex flex-row items-center justify-start gap-[0.5em]">
                <CourseRating amountOfStars={5} />
                <p className="font-bold text-gray-400 text-[0.8em]">
                  4 years ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SlOptionsVertical />
        </div>
      </div>
      <p>
        Thank you sir for this course. Best course On Semiconductor for
        Engineering students. Highly recommend this course. Specially for
        Electronics engineers
      </p>
      <div className="flex flex-row items-start justify-start gap-[1em]">
        <p>Helpful?</p>
        <BiLike />
        <BiDislike />
      </div>
    </div>
  );
};

export default UserCourseReview;
