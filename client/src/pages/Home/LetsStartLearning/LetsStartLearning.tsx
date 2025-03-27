import { btnStyleNHover } from '@/utils/stylesStorage';
import StartWeeklyStreak from './StartWeeklyStreak/StartWeeklyStreak';
import ContinueLearningCourse from './ContinueLearningCourse/ContinueLearningCourse';
import ButtonsCarousel from '@/components/ButtonsCarousel/ButtonsCarousel';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Link } from 'react-router-dom';

const LetsStartLearning = () => {
  const amountOfLessonsSpecificCourseChosen = useSelector(
    (state: RootState) => state?.user?.coursesInProgress
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="flex w-full flex-col items-stretch justify-start gap-6 pl-4">
      <div className="flex w-full  items-center justify-between">
        <h1 className="font-extrabold">Let's start learning</h1>
        <div>
          <Link to="/wishlist">
            <button
              className={`${btnStyleNHover} rounded-md px-3 py-3 font-sans text-base font-bold text-purple-700 underline`}
            >
              My learning
            </button>
          </Link>
        </div>
      </div>
      {amountOfLessonsSpecificCourseChosen && amountOfLessonsSpecificCourseChosen.length > 1 && (
        <ButtonsCarousel
          state={currentIndex}
          leftPosition="1%"
          topPosition="81.5%"
          rightPosition="2%"
          useCustom={false}
          showDirectionalButtonsOnlyOnEdge={true}
          handleFnNext={handleNext}
          handleFnPrev={handlePrev}
        />
      )}
      {/* // TODO Pass all the course progress to this component  */}
      <ContinueLearningCourse />
      <div className="my-4">
        <StartWeeklyStreak />
      </div>
    </div>
  );
};

export default LetsStartLearning;
