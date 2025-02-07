import CourseRating from "@/pages/ViewCoursePageInfo/CourseRating/CourseRating";
import { LuDot } from "react-icons/lu";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import React from "react";

const CourseCardInstructorRelated: React.FC<{
  courseDiscountPrice: Number;
  courseFullPrice: Number;
  totalRatings: Number;
  courseName: string;
  courseTag: string;
  courseInstructorName: string;
  courseImg: string;
  totalCourseDuration: Number;
}> = ({
  courseDiscountPrice,
  courseInstructorName,
  courseFullPrice,
  totalRatings,
  courseTag,
  courseName,
  courseImg,
  totalCourseDuration,
}) => {
  return (
    <div>
      <div className=" flex flex-col items-start justify-start gap-[0.2em] cursor-pointer">
        <img
          src={courseImg}
          alt=""
          className="w-[200px] border border-gray-300"
        />
        <b className="w-[200px]">{courseName}</b>
        <p>{courseInstructorName}</p>
        <div className="flex flex-row items-center">
          <b className="text-[#BB6300]">4.7</b>
          <CourseRating amountOfStars={4.7} courseRating={0} />
          <p className="text-gray-500 text-[0.8em]">({totalRatings})</p>
        </div>
        <div className="text-gray-500 text-[0.8em] flex flex-row items-center justify-start gap-[0.2em]">
          <p>{totalCourseDuration} hours</p>
          <LuDot />
          <p>59 lectures</p>
          <LuDot />
          <p>Intermediate</p>
        </div>
        <CoursePrice
          chooseFlex={`flex items-center`}
          fullPrice={courseFullPrice || 0}
          discountPrice={courseDiscountPrice || 0}
        />
        <CourseTag tagName={courseTag} />
      </div>
    </div>
  );
};

export default CourseCardInstructorRelated;
