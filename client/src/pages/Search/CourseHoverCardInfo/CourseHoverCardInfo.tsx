import TriangleShape from "./TriangleShape/TriangleShape";
import InteractionsBtns from "./InteractionBtns/InteractionsBtns";
import CoursePros from "./CoursePros/CoursePros";

const CourseHoverCardInfo = ({ whatYouWillLearn, courseId }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div>
        <TriangleShape />
        <div className="w-[400px] rounded-[0.5em] bg-white p-[1.5em] shadow-2xl">
          <CoursePros whatYouWillLearn={whatYouWillLearn} />
          <InteractionsBtns courseId={courseId} />
        </div>
      </div>
    </div>
  );
};

export default CourseHoverCardInfo;
