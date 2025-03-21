import CourseImg from "../CourseImg/CourseImg";
import CourseName from "../CourseName/CourseName";
import LastUpdatedNTotalTime from "../LastUpdatedNTotalTime/LastUpdatedNTotalTime";
import RatingAvg from "../RatingAvg/RatingAvg";
import StudentsEnroll from "../StudentsEnroll/StudentsEnroll";
import CoursePrice from "../CoursePrice/CoursePrice";
import HeartBtn from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/HeartBtn/HeartBtn";

const CourseCard: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-row items-start justify-around gap-[1em] py-[0.5em] ">
        <CourseImg />
        <div className="flex flex-col gap-[0.5em]">
          <CourseName />
          <LastUpdatedNTotalTime />
        </div>
        <RatingAvg />
        <StudentsEnroll />
        <CoursePrice />
        <div>
          <HeartBtn />
        </div>
      </div>
      <hr className="mb-[0.5em]" />
    </div>
  );
};

export default CourseCard;
