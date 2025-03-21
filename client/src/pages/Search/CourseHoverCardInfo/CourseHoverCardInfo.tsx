import TriangleShape from "./TriangleShape/TriangleShape";
import InteractionsBtns from "./InteractionBtns/InteractionsBtns";
import CoursePros from "./CoursePros/CoursePros";

const CourseHoverCardInfo: React.FC<{
  whatYouWillLearn: string[];
  courseId: string;
  coursePrice: number;
  fullPriceCourse: number;
  index: number;
  courseTopic: string;
  instructorId: string;
}> = ({
  whatYouWillLearn,
  courseId,
  coursePrice,
  fullPriceCourse,
  index,
  courseTopic,
  instructorId,
}) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center"
      id={courseId}
    >
      <div id={courseId} className={courseId}>
        <TriangleShape index={index} />
        <div className="w-[400px] rounded-[0.5em] bg-white p-[1.5em] shadow-alertAlgoInfo">
          <CoursePros whatYouWillLearn={whatYouWillLearn} />
          <InteractionsBtns
            instructorId={instructorId}
            courseTopic={courseTopic}
            courseId={courseId}
            coursePrice={coursePrice}
            fullPriceCourse={fullPriceCourse}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHoverCardInfo;
