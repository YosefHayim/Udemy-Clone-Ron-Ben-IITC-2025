import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import coursePreviewImg from "/images/course-preview-card.png";
import MoneyBack from "./MoneyBack/MoneyBack";
import CourseIncludes from "./CourseIncludes/CourseIncludes";
import InteractionBtns from "./InteractionBtns/InteractionBtns";
import TimeLeftBuyCourse from "./TimeLeftBuyCourse/TimeLeftBuyCourse";
import CouponArea from "./CouponArea/CouponArea";
import UdemyBusiness from "./UdemyBusiness/UdemyBusiness";
import AddCartNBuyBtn from "./AddCartNBuyBtn/AddCartNBuyBtn";

const CoursePreviewCard = () => {
  return (
    <div className="shadow-previewCourseCardShadow w-[320px] z-[10] bg-white border border-b-gray-100">
      <div className="">
        <img src={coursePreviewImg} alt="" />
        <b className="absolute text-white translate-y-[-1.5em]">
          Preview this course
        </b>
      </div>
      <div className="p-[1.5em]">
        <div>
          <CoursePrice
            discountPrice={"39.90"}
            fullPrice={"79.90"}
            chooseFlex={"flex flex-row items-center"}
            discountPriceSize={"2em"}
          />
        </div>
        <TimeLeftBuyCourse />
        <AddCartNBuyBtn />
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
