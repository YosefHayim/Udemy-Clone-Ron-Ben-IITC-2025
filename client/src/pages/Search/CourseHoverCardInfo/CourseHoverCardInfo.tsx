import TriangleShape from "./TriangleShape/TriangleShape";
import InteractionsBtns from "./InteractionBtns/InteractionsBtns";
import CoursePros from "./CoursePros/CoursePros";

const CourseHoverCardInfo = () => {
  return (
    <div>
      <TriangleShape />
      <div className="w-[400px] rounded-[0.5em] bg-white p-[1em] shadow-2xl">
        <CoursePros />
        <InteractionsBtns />
      </div>
    </div>
  );
};

export default CourseHoverCardInfo;
