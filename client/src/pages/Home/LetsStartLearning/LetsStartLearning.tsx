import { btnStyleNHover } from "@/utils/stylesStorage";
import StartWeeklyStreak from "./StartWeeklyStreak/StartWeeklyStreak";
import ContinueLearningCourse from "./ContinueLearningCourse/ContinueLearningCourse";

const LetsStartLearning = () => {
  return (
    <div className="flex w-full flex-col items-stretch justify-start gap-6 pl-4">
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="font-extrabold">Let's start learning</h1>
        <div>
          <button
            className={`${btnStyleNHover} rounded-md px-3 py-3 font-sans text-base font-bold text-purple-700 underline`}
          >
            My learning
          </button>
        </div>
      </div>
      <ContinueLearningCourse />
      <div className="my-4">
        <StartWeeklyStreak />
      </div>
    </div>
  );
};

export default LetsStartLearning;
