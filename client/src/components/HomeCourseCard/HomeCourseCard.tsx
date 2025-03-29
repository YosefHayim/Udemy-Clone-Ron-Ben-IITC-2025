import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CourseHoverCardInfo from "@/pages/Search/CourseHoverCardInfo/CourseHoverCardInfo";

const HomeCourseCard = ({ courseCard, index }) => {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  const handleMouseEnter = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({ top: rect.top - 400, left: rect.right });
    setHoveredCourse(id);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  const handleCardClick = (courseId: string) => {
    navigate(`/course-view/${courseId}`);
  };

  return (
    <div
      onClick={() => handleCardClick(courseCard._id)}
      onMouseEnter={(e) => handleMouseEnter(courseCard._id, e)}
      onMouseLeave={handleMouseLeave}
      id={courseCard?._id}
      className="w-[300px] cursor-pointer flex-col items-start overflow-hidden rounded-lg border border-borderGrayColor bg-white shadow-sm"
    >
      <img
        src={courseCard?.courseImg}
        alt={courseCard?.courseName}
        className="h-40 w-full object-cover"
      />
      <hr className="h-[0.1em] w-full bg-gray-300" />
      <div className="flex flex-col items-start justify-start gap-1 p-4">
        <CourseTitle title={courseCard.courseName} />
        <CourseInstructor instructor={courseCard?.courseInstructor?.fullName} />
        <CourseRatings
          totalRatings={courseCard?.totalRatings}
          avgRatings={courseCard?.averageRating}
        />
        <CoursePrice
          discountPrice={courseCard.courseDiscountPrice}
          fullPrice={courseCard.courseFullPrice}
        />
        <CourseTag tagName={courseCard?.courseTag} />
      </div>
      {hoveredCourse === courseCard._id && (
        <div
          className="absolute z-[1000]"
          style={{
            top: `${hoverPosition.top}px`,
            left: `${hoverPosition.left}px`,
          }}
        >
          <CourseHoverCardInfo
            courseName={courseCard?.courseName}
            courseLanguages={courseCard?.courseLanguages}
            courseTag={courseCard?.courseTag}
            showCourseLength={true}
            totalCourseLessons={courseCard?.totalCourseLessons}
            totalCourseDuration={courseCard?.totalCourseDuration}
            courseLevel={courseCard?.courseLevel}
            courseUpdatedAt={courseCard?.updatedAt}
            courseRecapInfo={courseCard?.courseRecapInfo}
            positionedRight={true}
            width="330px"
            instructorId={courseCard?.courseInstructor?._id}
            courseTopic={courseCard?.courseTopic}
            index={index}
            displayWhatYouLearn={false}
            whatYouWillLearn={courseCard?.whatYouWillLearn}
            courseId={courseCard?._id}
            fullPriceCourse={courseCard?.courseFullPrice}
            coursePrice={courseCard?.courseDiscountPrice}
          />
        </div>
      )}
    </div>
  );
};

export default HomeCourseCard;
