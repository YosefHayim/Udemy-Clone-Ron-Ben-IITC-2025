import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import { useContext, useEffect, useState } from "react";
import HomeCourseCard from "@/components/HomeCourseCard/HomeCourseCard";
import ButtonsCarousel from "@/components/ButtonsCarousel/ButtonsCarousel";
import Loader from "@/components/Loader/Loader";
import { filterContext } from "@/contexts/filterSearch";
import CourseHoverCardInfo from "@/pages/Search/CourseHoverCardInfo/CourseHoverCardInfo";

const LearnersAreViewing = ({ randomAlgoWord }) => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [isCourseAnimating, setCourseAnimating] = useState(false);
  const [countCourseClick, setCourseClick] = useState(0);

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const { filterData, setSortBy } = useContext(filterContext);

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
    <div className="px-6 py-8">
      <h2 className="mb-6 font-sans text-3xl font-extrabold">Learners are viewing</h2>
      <div className="relative w-full">
        {data && data?.response?.length > 7 && (
          <ButtonsCarousel
            handleFnNext={handleNextCourse}
            handleFnPrev={handlePrevCourse}
            state={countCourseClick}
            useCustom={true}
            showDirectionalButtonsOnlyOnEdge={false}
            topPosition="40%"
            leftPosition="1%"
            rightPosition="2%"
          />
        )}

        <div
          className={`flex ${
            data?.response && data?.response?.length > 7
              ? "w-max items-center justify-center"
              : "w-full items-center justify-start"
          } z-20 h-full gap-5 transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateX(-${courseIndex * 30.5}%)` }}
        >
          {data?.response?.length > 1 &&
            data.response.map((courseCard, index: number) => (
              <HomeCourseCard
                courseCard={courseCard}
                index={index}
                key={courseCard?._id}
                onHover={setHoveredCourse}
                onPosition={setHoverPosition}
              />
            ))}
        </div>

        {hoveredCourse && (
          <div
            className="absolute z-[1000]"
            style={{
              top: `${hoverPosition.top - hoverPosition.top / 20}px`,
              left: `${hoverPosition.left}px`,
            }}
          >
            <CourseHoverCardInfo
              courseName={hoveredCourse.courseName}
              courseLanguages={hoveredCourse.courseLanguages}
              courseTag={hoveredCourse.courseTag}
              showCourseLength={true}
              totalCourseLessons={hoveredCourse.totalCourseLessons}
              totalCourseDuration={hoveredCourse.totalCourseDuration}
              courseLevel={hoveredCourse.courseLevel}
              courseUpdatedAt={hoveredCourse.updatedAt}
              courseRecapInfo={hoveredCourse.courseRecapInfo}
              positionedRight={true}
              width="330px"
              instructorId={hoveredCourse.courseInstructor?._id}
              courseTopic={hoveredCourse.courseTopic}
              index={hoveredCourse._id}
              displayWhatYouLearn={false}
              whatYouWillLearn={hoveredCourse.whatYouWillLearn}
              courseId={hoveredCourse._id}
              fullPriceCourse={hoveredCourse.courseFullPrice}
              coursePrice={hoveredCourse.courseDiscountPrice}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnersAreViewing;
