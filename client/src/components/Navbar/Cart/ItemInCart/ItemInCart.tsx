import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import { BsFillTagFill } from "react-icons/bs";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import { useQuery } from "@tanstack/react-query";
import getCourseCartInfoByCourseId from "@/api/courses/getCourseCartInfoByCourseId";
import { useDispatch } from "react-redux";
import { removeCourseFromCart } from "@/redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import OptionsMyLearning from "./OptionsMyLearning/OptionsMyLearning";

const ItemInCart = ({
  rowPrices = true,
  courseId = "",
  courseImgSize = "h-[5em] rounded-[0.3em]",
  hide = true,
  shortCutInstructor = false,
  shortcutTitle = false,
  chooseFlex = "flex-row",
  itemsPosition = "center",
  textColor = "text-[#a435f0]",
  showDisPrice = false,
  showHR = true,
  showInstructor = true,
  showFullPrice = true,
  isColCourseBox = false,
  textSize = "",
  gapPrice = "gap-[1em]",
  width = "w-full",
  isMyLearning = false,
}) => {
  if (!courseId) return null;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isPending } = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => {
      if (!courseId) {
        throw new Error("Course ID is undefined");
      }
      return getCourseCartInfoByCourseId(courseId);
    },
    staleTime: 5 * 60 * 1000,
  });

  if (error && !data) {
    navigate("/not/found");
  }

  if (isPending) {
    <div></div>;
  }

  const handleCourseView = (courseId: string): void => {
    navigate(`/course-view/${courseId}`);
  };

  const handleRemove = () => {
    dispatch(
      removeCourseFromCart({
        courseId,
        originalPrice: data?.courseFullPrice || 0,
        discountPrice: data?.courseDiscountPrice || 0,
      })
    );
  };

  return (
    <div id={courseId} className={`p-[1em] ${width} ${textSize}`}>
      <div
        onClick={() => handleCourseView(courseId)}
        id={courseId}
        className={`${
          isColCourseBox
            ? "flex flex-col items-start justify-start gap-[1em] cursor-pointer w-full"
            : "flex flex-row items-start justify-start gap-[1em] cursor-pointer w-full"
        }`}
      >
        <div>
          <div className="relative">
            <img
              id={courseId}
              src={data?.courseImg}
              // alt={`${data?.courseName} image`}
              className={`${courseImgSize}`}
            />
            <div
              className={
                isMyLearning
                  ? ``
                  : `hover:bg-black absolute top-0 w-full h-full opacity-[80%]`
              }
            >
              <FaCirclePlay className="text:none hover:text-white text-[3em] absolute left-[38%] top-[35%]" />
              <div
                className={
                  isMyLearning
                    ? ``
                    : `bg-white absolute right-[5%] top-[5%] p-[0.5em] flex items-center rounded-[0.2em] h-[2em] hover:bg-gray-100`
                }
              >
                <OptionsMyLearning />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${chooseFlex} flex flex-row items-${itemsPosition} justify-center ${gapPrice}`}
        >
          <div className="flex flex-col items-start gap-[0.5em] w-[220px]">
            <CourseTitle
              title={data?.courseName}
              shortcutTitle={shortcutTitle}
            />
            <div className={`${showInstructor ? "block" : "hidden"}`}>
              <CourseInstructor
                instructor={data?.courseInstructor.fullName}
                shortCutInstructor={shortCutInstructor}
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[1em]">
              <div className={hide ? "block" : "hidden"}>
                <CourseTag tagName={data?.courseTag} />
              </div>
              <div className={hide ? "block" : "hidden"}>
                <CourseRatings
                  stars=""
                  avgRatings={data?.averageRating}
                  totalRatings={data?.totalRatings}
                />
              </div>
            </div>
            <div className={hide ? "block" : "hidden"}>
              <CourseLength
                courseLevel={data?.courseLevel}
                totalLectures={data?.totalCourseLessons}
                totalMinutes={data?.totalCourseDuration}
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
                <div
                  className={
                    hide ? "flex flex-row items-center gap-[0.2em]" : "hidden"
                  }
                >
                  <b className="">₪{data?.courseDiscountPrice}</b>
                  <BsFillTagFill />
                </div>
                <div
                  className={`${
                    rowPrices
                      ? "flex flex-row font-bold"
                      : "flex flex-col font-light text-black"
                  }  items-start gap-[0.2em]`}
                >
                  <p>
                    {data && showDisPrice
                      ? `₪${data?.courseDiscountPrice}`
                      : ""}
                  </p>
                  <p
                    className={
                      showFullPrice ? "text-gray-600 line-through" : "hidden"
                    }
                  >
                    ₪{data?.courseFullPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[-1em] mt-[0.5em]">
        <hr className={`${showHR ? "block" : "hidden"} relative w-full`} />
      </div>
    </div>
  );
};

export default ItemInCart;
