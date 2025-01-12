import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import courseCartImg from "/images/course-cart-img.png";
import { BsFillTagFill } from "react-icons/bs";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";

const ItemInCart = () => {
  return (
    <div>
      <div className="flex flex-row items-start justify-start gap-[1em]">
        <div>
          <img src={courseCartImg} alt="" className="rounded-[0.5em]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[1em]">
          <div className="flex flex-col items-start gap-[0.5em]">
            <CourseTitle />
            <CourseInstructor />
            <CoursePrice showFullPrice={false} chooseFlex="hidden" />
            <div className="flex flex-row items-start justify-start gap-[1em]">
              <CourseTag />
              <CourseRatings />
            </div>
            <CourseLength />
          </div>
          <div className="text-[0.8em] text-[#5022c3] hover:text-[#3b198f]">
            <p className="cursor-pointer">Remove</p>
            <p className="cursor-pointer">Save for Later</p>
            <p className="cursor-pointer">Move to Wishlist</p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center gap-[0.2em] text-[#a435f0]">
              <b className="">₪519.90</b>
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
