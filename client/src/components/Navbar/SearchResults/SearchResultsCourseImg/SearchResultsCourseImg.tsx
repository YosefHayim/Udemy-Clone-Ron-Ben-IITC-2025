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
      className=" p-[0.8em] flex flex-row items-center justify-start gap-[1em] font-bold hover:bg-gray-100 cursor-pointer"
    >
      <img
        src={courseImg}
        alt=""
        className="w-7 h-6 text-gray-600 opacity-200"
        id={courseId}
      />
      <div className="flex flex-col">
        <p id={courseId}>{courseName}</p>
        <div className="flex flex-row gap-[1em]">
          <b className="text-grayResults font-semibold">Course</b>
          <p className="text-grayResults font-normal ">{instructorName}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCourseImg;
