import TriangleShape from "./TriangleShape/TriangleShape";
import InteractionsBtns from "./InteractionBtns/InteractionsBtns";
import CoursePros from "./CoursePros/CoursePros";

const CourseHoverCardInfo = ({ whatYouWillLearn, courseId, coursePrice }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      id={courseId}
    >
      <div id={courseId} className={courseId}>
        <TriangleShape />
        <div className="w-[400px] rounded-[0.5em] bg-white p-[1.5em] shadow-2xl">
          <CoursePros whatYouWillLearn={whatYouWillLearn} />
          <InteractionsBtns courseId={courseId} coursePrice={coursePrice} />
        </div>
      </div>
    </div>
  );
};

export default CourseHoverCardInfo;
