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
      <img
        src={courseImg}
        alt=""
        className="w-6 h-6 text-black opacity-200"
        id={courseId}
      />
      <div className="flex flex-col">
        <p id={courseId}>{courseName}</p>
        <div className="flex flex-row gap-[1em]">
          <b className="text-grayResults ">Course</b>
          <p className="text-grayResults font-normal ">
            {instructorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCourseImg;
