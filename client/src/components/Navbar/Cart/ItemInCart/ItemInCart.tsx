import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import { BsFillTagFill } from "react-icons/bs";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import { useQuery } from "@tanstack/react-query";
import getCourseById from "@/api/courses/getCourseById";
import Loader from "@/components/Loader/Loader";

const ItemInCart = ({ courseId }) => {
  if (!courseId) {
    return;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourseById(courseId),
  });

  if (isLoading) return;
  <Loader />;

  if (error) return <div>Error loading course data</div>;

  console.log(data);

  return (
    <div>
      <div className="flex flex-row items-start justify-start gap-[1em]">
        <div>
          <img src={data.courseImg} alt="" className="h-[5em]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[1em]">
          <div className="flex flex-col items-start gap-[0.5em]">
            <CourseTitle title={data.courseName} />
            <CourseInstructor instructor={data.fullName} />
            <div className="flex flex-row items-start justify-start gap-[1em]">
              <CourseTag tagName={data.courseTag} />
              <CourseRatings
                avgRatings={data.averageRating}
                totalRatings={data.reviews.length}
              />
            </div>
            <CourseLength
              courseLevel={data.courseLevel}
              totalLectures={data.totalCourseLessons}
              totalMinutes={data.totalCourseDuration}
            />
          </div>
          <div className="text-[0.8em] text-[#5022c3] hover:text-[#3b198f]">
            <p className="cursor-pointer">Remove</p>
            <p className="cursor-pointer">Save for Later</p>
            <p className="cursor-pointer">Move to Wishlist</p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center gap-[0.2em] text-[#a435f0]">
              <b className="">₪{data.courseDiscountPrice}</b>
              <BsFillTagFill />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[1em] mt-[0.5em]">
        <hr className="relative w-full" />
      </div>
    </div>
  );
};

export default ItemInCart;
