import { useState, useEffect } from "react";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import MoneyBack from "./MoneyBack/MoneyBack";
import CourseIncludes from "./CourseIncludes/CourseIncludes";
import InteractionBtns from "./InteractionBtns/InteractionBtns";
import TimeLeftBuyCourse from "./TimeLeftBuyCourse/TimeLeftBuyCourse";
import CouponArea from "./CouponArea/CouponArea";
import UdemyBusiness from "./UdemyBusiness/UdemyBusiness";
import AddCartNBuyBtn from "./AddCartNBuyBtn/AddCartNBuyBtn";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { AiFillInfoCircle } from "react-icons/ai";
import { RootState } from "@/redux";
import { CoursePreviewCardProps } from "@/types/types";
import { IoPlayCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CoursePreviewCard: React.FC<CoursePreviewCardProps> = ({
  courseImg,
  coursePrice,
  fullPrice,
  courseId,
  firstLessonId,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();

  const coursesBought = useSelector(
    (state: RootState) => state.user.coursesBought
  );

  useEffect(() => {
    if (Array.isArray(coursesBought)) {
      setIsAddedToCart(coursesBought.includes(courseId)); // Check if courseId exists
    } else {
      setIsAddedToCart(false); // Handle cases where coursesBought is not an array
    }
  }, [coursesBought, courseId]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateCourseLesson = () => {
    navigate(`/course/${courseId}/lesson/${firstLessonId}/overview`);
  };

  return (
    <div
      className={`shadow-previewCourseCardShadow w-[320px] z-[1500] bg-white border border-b-gray-100 ${
        isFixed ? "fixed right-[20%] top-[2%]" : "static"
      } transition-all duration-300 ease-in-out`}
      style={{
        opacity: isFixed ? 1 : 1,
        transform: isFixed ? "translateY(0)" : "translateY(10px)",
      }}
    >
      <div className="relative" onClick={navigateCourseLesson}>
        <img
          src={courseImg}
          alt="Image of the course"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
          <IoPlayCircleSharp className="text-white text-[6em]" />
          <b className="font-bold text-white absolute bottom-[5%] text-[1.4em]">
            Preview this course
          </b>
        </div>
      </div>

      <div className="p-[1.5em]">
        <div className={isAddedToCart ? "hidden" : "block"}>
          <CoursePrice
            showFullPrice={true}
            discountPrice={coursePrice}
            fullPrice={fullPrice}
            chooseFlex={"flex flex-row items-center"}
            discountPriceSize={"2em"}
          />
        </div>
        {isAddedToCart ? (
          <div className="w-full flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[0.5em] mb-[0.5em]">
              <AiFillInfoCircle className="text-[#6d28d2] text-[2.5em]" />
              <b className="text-[1.3em]">
                You purchased this course on Aug. 26, 2024
              </b>
            </div>
            <Button
              className="font-bold text-white rounded-[0.2em] w-full"
              onClick={navigateCourseLesson}
            >
              Go to course
            </Button>
          </div>
        ) : (
          <div>
            <TimeLeftBuyCourse coursePrice={coursePrice} />
            <AddCartNBuyBtn
              courseId={courseId}
              discountPrice={coursePrice}
              fullPrice={fullPrice}
            />
          </div>
        )}

        <MoneyBack />
        <CourseIncludes />
        <InteractionBtns />
        <CouponArea />
        <UdemyBusiness />
      </div>
    </div>
  );
};

export default CoursePreviewCard;
