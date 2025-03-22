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
      className=" flex cursor-pointer flex-row items-center justify-start gap-[1em] p-[0.8em] font-bold hover:bg-gray-100"
    >
      <img
        src={courseImg}
        alt=""
        className="opacity-200 h-6 w-7 text-gray-600"
        id={courseId}
      />
      <div className="flex flex-col">
        <p id={courseId}>{courseName}</p>
        <div className="flex flex-row gap-[1em]">
          <b className="font-semibold text-grayResults">Course</b>
          <p className="font-normal text-grayResults ">{instructorName}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCourseImg;
