import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import { useContext, useEffect, useState } from "react";
import HomeCourseCard from "@/components/HomeCourseCard/HomeCourseCard";
import ButtonsCarousel from "@/components/ButtonsCarousel/ButtonsCarousel";
import Loader from "@/components/Loader/Loader";
import { FilterContext } from "@/contexts/FilterSearch";
import CourseHoverCardInfo from "@/pages/Search/CourseHoverCardInfo/CourseHoverCardInfo";

const LearnersAreViewing = ({ randomAlgoWord }) => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [isCourseAnimating, setCourseAnimating] = useState(false);
  const [countCourseClick, setCourseClick] = useState(0);

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const { filterData, setSortBy } = useContext(FilterContext);

  const { data, isLoading, isPending } = useQuery({
    queryKey: [randomAlgoWord],
    queryFn: () => getAllCourses(randomAlgoWord, filterData),
    enabled: !!randomAlgoWord,
  });

  const handlePrevCourse = () => {
    if (isCourseAnimating || courseIndex === 0) return;
    setCourseAnimating(true);
    setCourseClick((prevCount) => prevCount - 1);
    setCourseIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setCourseAnimating(false), 500);
  };

  const handleNextCourse = () => {
    if (isCourseAnimating) return;
    setCourseClick((prevCount) => prevCount + 1);
    setCourseAnimating(true);
    setCourseIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setCourseAnimating(false), 500);
  };

  if (isLoading || isPending) {
    return <Loader useSmallLoading={false} hSize="" />;
  }

  return (
    <div className="py-8">
      <h2 className="mb-6 font-sans text-3xl font-extrabold">Learners are viewing</h2>
      <div className="relative w-full">
        {data?.response && data?.response?.length > 7 && (
          <ButtonsCarousel
            handleFnNext={handleNextCourse}
            handleFnPrev={handlePrevCourse}
            state={countCourseClick}
            useCustom={true}
            showDirectionalButtonsOnlyOnEdge={false}
            topPosition="40%"
            leftPosition="-1.8%"
            rightPosition="-1.5%"
          />
        )}
        <div className="overflow-x-clip">
          <div
            className={`flex
            ${data?.response && data.response?.length > 7
                ? "w-max items-center justify-center"
                : "w-full items-center justify-start"
              } z-20 h-full gap-5 transition-transform duration-1000 ease-in-out`}
            style={{ transform: `translateX(-${courseIndex * 30.90875}%)` }}
          >
            {data?.response && data?.response ? (
              data?.response?.map((courseCard, index: number) => (
                <HomeCourseCard
                  key={courseCard._id || index}
                  courseCard={courseCard}
                  index={index}
                  onHover={setHoveredCourse}
                  onPosition={setHoverPosition}
                />
              ))
            ) : (
              <div className="w-full">
                <Loader useSmallLoading={false} hSize="" />
              </div>
            )}
          </div>
        </div>
      </div>
      {hoveredCourse && (
        <div
          className="absolute z-50"
          style={{
            top: hoverPosition.top - 50,
            left: hoverPosition.left,
          }}
          onMouseLeave={() => setHoveredCourse(null)}
          onMouseEnter={() => setHoveredCourse(hoveredCourse)}
        >
          <CourseHoverCardInfo
            whatYouWillLearn={hoveredCourse.whatYouWillLearn}
            courseName={hoveredCourse.courseName}
            courseId={hoveredCourse._id}
            coursePrice={hoveredCourse.courseDiscountPrice}
            fullPriceCourse={hoveredCourse.courseFullPrice}
            index={0}
            courseTopic={hoveredCourse.courseTopic}
            instructorId={hoveredCourse.courseInstructor?._id}
            showCourseLength={true}
            courseLevel={hoveredCourse.courseLevel}
            totalCourseDuration={hoveredCourse.totalDuration}
            totalCourseLessons={hoveredCourse.totalLectures}
            courseUpdatedAt={new Date(hoveredCourse.updatedAt)}
            courseTag={hoveredCourse.courseTag}
            courseLanguages={hoveredCourse.courseLanguages}
            courseRecapInfo={hoveredCourse.courseRecapInfo}
          />
        </div>
      )}
    </div>
  );
};

export default LearnersAreViewing;
