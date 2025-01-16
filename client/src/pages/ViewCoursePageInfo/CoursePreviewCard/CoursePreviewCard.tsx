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

const CoursePreviewCard: React.FC<CoursePreviewCardProps> = ({
  courseImg,
  discountPrice,
  fullPrice,
  courseId,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const coursesBought = useSelector(
    (state: RootState) => state.user.coursesBought
  );

  useEffect(() => {
    if (Array.isArray(coursesBought)) {
      setIsAddedToCart(coursesBought.includes(courseId));
    } else {
      setIsAddedToCart(coursesBought === courseId);
    }
  }, [coursesBought, courseId]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div>
        <img src={courseImg} alt="Image of the course" />
        <b className="absolute text-white translate-y-[-1.5em]">
          Preview this course
        </b>
      </div>
      <div className="p-[1.5em]">
        <div className={isAddedToCart ? "hidden" : "block"}>
          <CoursePrice
            discountPrice={discountPrice}
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
            <Button className="font-bold text-white rounded-[0.2em] w-full">
              Go to course
            </Button>
          </div>
        ) : (
          <div>
            <TimeLeftBuyCourse />
            <AddCartNBuyBtn
              courseId={courseId}
              discountPrice={discountPrice}
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
