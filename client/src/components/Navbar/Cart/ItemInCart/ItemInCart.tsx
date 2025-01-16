import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import { BsFillTagFill } from "react-icons/bs";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader/Loader";
import getCourseCartInfoByCourseId from "@/api/courses/getCourseCartInfoByCourseId";
import { useDispatch } from "react-redux";
import { removeCourseFromCart } from "@/redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const ItemInCart = ({
  courseId = "",
  courseImgSize = "h-[5em]",
  hide = true,
  shortCutInstructor = false,
  shortcutTitle = false,
  chooseFlex = "flex-row",
  itemsPosition = "center",
  textColor = "text-[#a435f0]",
}) => {
  if (!courseId) return null;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => getCourseCartInfoByCourseId(courseId),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div>
        <Loader hSize="200px" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading course data</div>;
  }

  console.log(data);

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(
      removeCourseFromCart({
        courseId,
        coursePrice: data.courseDiscountPrice || 0,
        amountToRemove: 1,
      })
    );
  };

  const handleCourseView = (e) => {
    if (e.target.tagName === "DIV") {
      navigate(`/course-view/${courseId}`);
    }
  };

  return (
    <div className="p-[1em] w-full">
      <div
        className={`${chooseFlex} flex items-start justify-start gap-[1em] cursor-pointer`}
        onClick={handleCourseView}
      >
        <div>
          <img src={data.courseImg} alt="" className={`${courseImgSize}`} />
        </div>
        <div
          className={`${chooseFlex} flex flex-row items-${itemsPosition} justify-center gap-[1em]`}
        >
          <div className="flex flex-col items-start gap-[0.5em] w-[220px]">
            <CourseTitle
              title={data.courseName}
              shortcutTitle={shortcutTitle}
            />
            <CourseInstructor
              instructor={data.courseInstructor.fullName}
              shortCutInstructor={shortCutInstructor}
            />
            <div className="flex flex-row items-start justify-start gap-[1em]">
              <div className={hide ? "block" : "hidden"}>
                <CourseTag tagName={data.courseTag} />
              </div>
              <div className={hide ? "block" : "hidden"}>
                <CourseRatings
                  avgRatings={data.averageRating}
                  totalRatings={data.totalRatings}
                />
              </div>
            </div>
            <div className={hide ? "block" : "hidden"}>
              <CourseLength
                courseLevel={data.courseLevel}
                totalLectures={data.totalCourseLessons}
                totalMinutes={data.totalCourseDuration}
              />
            </div>
          </div>
          <div className={hide ? "block" : "hidden"}>
            <div className="text-[0.8em] text-[#5022c3] hover:text-[#3b198f]">
              <button className="cursor-pointer" onClick={handleRemove}>
                Remove
              </button>
              <p className="cursor-pointer">Save for Later</p>
              <p className="cursor-pointer">Move to Wishlist</p>
            </div>
          </div>
          <div>
            <div
              className={`flex flex-row items-center justify-center gap-[0.2em] ${textColor}`}
            >
              <div className="flex flex-col items-start justify-start">
                <b className="">₪{data.courseDiscountPrice}</b>
                <b className="text-gray-600 line-through font-light">
                  ₪{data.courseDiscountPrice}
                </b>
              </div>
              <div className={hide ? "block" : "hidden"}>
                <BsFillTagFill />
              </div>
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
