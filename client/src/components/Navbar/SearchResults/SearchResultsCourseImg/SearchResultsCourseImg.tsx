import { searchResultCourseImgProps } from "@/types/types";

const SearchResultsCourseImg: React.FC<searchResultCourseImgProps> = ({
  courseName,
  instructorName,
  courseImg,
  courseId,
}) => {
  return (
    <div
      id={courseId}
      className=" pl-[0.5em] pt-[0.5em] flex flex-row items-start justify-start gap-[1em] font-bold hover:bg-purpleHoverBtn cursor-pointer"
    >
      <img src={courseImg} alt="" className="w-6 h-6 text-black opacity-200" />
      <div className="flex flex-col">
        <p>{courseName}</p>
        <div className="flex flex-row gap-[1em]">
          <b className="text-grayResults text-[0.7em]">Course</b>
          <p className="text-grayResults font-normal text-[0.7em]">
            {instructorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCourseImg;
