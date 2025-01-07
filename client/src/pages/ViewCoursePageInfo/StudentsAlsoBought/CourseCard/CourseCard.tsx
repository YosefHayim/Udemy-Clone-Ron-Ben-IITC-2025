import CourseImg from "../CourseImg/CourseImg";
import CourseName from "../CourseName/CourseName";
import LastUpdatedNTotalTime from "../LastUpdatedNTotalTime/LastUpdatedNTotalTime";
import RatingAvg from "../RatingAvg/RatingAvg";
import StudentsEnroll from "../StudentsEnroll/StudentsEnroll";
import CoursePrice from "../CoursePrice/CoursePrice";
import HeartBtn from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/HeartBtn/HeartBtn";
import ShowMore from "../ShowMore/ShowMore";

const CourseCard = () => {
  return (
    <div>
      <div className="p-[0.5em] flex flex-row items-start justify-around gap-[0.5em] ">
        <hr />
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
      <ShowMore />
    </div>
  );
};

export default CourseCard;
