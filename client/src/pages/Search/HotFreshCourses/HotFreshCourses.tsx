import hotFreshOne from "/images/hot-fresh-course-1.png";
import hotFreshTwo from "/images/hot-fresh-course-2.png";
import hotFreshThree from "/images/hot-fresh-course-3.png";

const HotFreshCourses = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[2em]">
      <h2>Hot and Fresh Courses</h2>
      <div>
        <div className="flex flex-col items-start justify-start gap-[0.5em]">
          <div>
            <img src={hotFreshOne} alt="" className="w-[350px]" />
          </div>
          <div>
            <b>Mastering Generative AI Tools: InVideo AI and MidJourney AI</b>
          </div>
          <div>
            <p>Manas Roy | GenAI Instructor</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.5em]">
          <div>
            <img src={hotFreshTwo} alt="" className="w-[350px]" />
          </div>
          <div>
            <b>AI Powered Business Model Design | Certification</b>
          </div>
          <div>
            <p>Manas Roy | GenAI Instructor</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.5em]">
          <div>
            <img src={hotFreshThree} alt="" className="w-[350px]" />
          </div>
          <div>
            <b>Generative AI for Upskilling & Learning Initiatives</b>
          </div>
          <div>
            <p>Manas Roy | GenAI Instructor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotFreshCourses;
