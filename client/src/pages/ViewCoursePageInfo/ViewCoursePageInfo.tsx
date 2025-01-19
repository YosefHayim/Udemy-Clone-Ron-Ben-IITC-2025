import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader/Loader";
import getCourseById from "@/api/courses/getCourseById";
import CourseBasicInfo from "./CourseBasicInfo/CourseBasicInfo";
import CourseBigTitle from "./CourseBigTitle/CourseBigTitle";
import CourseContent from "./CourseContent/CourseContent";
import CourseCreatedBy from "./CourseCreatedBy/CourseCreatedBy";
import CourseRating from "./CourseRating/CourseRating";
import CourseRecap from "./CourseRecap/CourseRecap";
import CourseStudentRatings from "./CourseStudentsRatings/CourseStudentRatings";
import ExploreTopics from "./ExploreTopics/ExploreTopics";
import FrequentlyBoughtTogether from "./FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import InstructorSection from "./InstructorSection/InstructorSection";
import MoreCoursesByInstructor from "./MoreCoursesByInstructor/MoreCoursesByInstructor";
import ReportAbuse from "./ReportAbuse/ReportAbuse";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import StickyCourseNavbar from "./StickyCourseNavbar/StickyCourseNavbar";
import StudentsAlsoBought from "./StudentsAlsoBought/StudentsAlsoBought";
import TopicPathMenu from "./TopicPathMenu/TopicPathMenu";
import WhatYouLearn from "./WhatYouLearn/WhatYouLearn";
import CoursePreviewCard from "./CoursePreviewCard/CoursePreviewCard";

const ViewCoursePageInfo: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // Sanitize courseId
  const sanitizedCourseId = courseId?.trim().replace(/^:/, "");

  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const courseData = data;

  useEffect(() => {
    if (courseData?.courseName) {
      document.title = courseData.courseName;
    }
  }, [courseData?.courseName]);

  useEffect(() => {
    if (!sanitizedCourseId) {
      setError("Course ID is missing.");
      setIsLoading(false);
      return;
    }

    const fetchCourseData = async () => {
      try {
        setIsLoading(true);
        const response = await getCourseById(sanitizedCourseId);
        setData(response);
      } catch (err) {
        setError("Failed to fetch course data.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, [sanitizedCourseId]);

  if (isLoading) {
    return (
      <div>
        <Loader hSize="2000px" useSmallLoading={false} />
      </div>
    );
  }

  if (error) return <div>Error loading course data</div>;

  console.log(data);

  // Navigate to the first lesson
  const handleNavigateToFirstLesson = () => {
    const firstLessonId = courseData.sections?.[0]?.lessons?.[0]?._id;
    if (firstLessonId) {
      navigate(`/course/${sanitizedCourseId}/lesson/${firstLessonId}/overview`);
    } else {
      console.error("No lessons found in the course.");
    }
  };

  return (
    <div className="flex flex-row p-[3em] items-start justify-start w-full gap-[3em]">
      <div className="flex flex-col items-start justify-start gap-[1em]">
        {/* Background Section */}
        <div className="bg-[#1c1d1f] h-[350px] absolute w-full left-0 top-[9%]"></div>

        {/* Sticky Navbar */}
        <StickyCourseNavbar
          courseName={courseData.courseName}
          totalStudents={courseData.totalStudentsEnrolled.count}
          avgRating={courseData.averageRating}
          totalRatings={courseData.totalRatings}
        />

        {/* Topic Path */}
        <TopicPathMenu
          category={courseData.category}
          subcategory={courseData.subCategory}
          topic={courseData.courseTopic}
        />

        {/* Course Details */}
        <CourseBigTitle courseTitle={courseData.courseName} />
        <CourseRecap recapInfo={courseData.courseRecapInfo} />

        <div className="flex flex-row items-start justify-start gap-[0.5em]">
          <CourseRating amountOfStars={courseData.averageRating} />
          <CourseStudentRatings
            totalRated={courseData.totalRatings}
            totalStudents={courseData.totalStudentsEnrolled.count}
          />
          <button className="z-[1000]" onClick={handleNavigateToFirstLesson}>
            Go to First Lesson
          </button>
        </div>

        {/* Additional Info */}
        <CourseCreatedBy
          instructorName={courseData.courseInstructor.fullName}
          instructorId={courseData.courseInstructor._id}
        />
        <CourseBasicInfo
          lastUpdated={courseData.updatedAt}
          courseLanguage={courseData.courseLanguages}
        />
        <WhatYouLearn prosCourse={courseData.whatYouWillLearn} />
        <ExploreTopics
          category={courseData.category}
          subCategory={courseData.subCategory}
          topic={courseData.courseTopic}
        />

        {/* Course Content */}
        <CourseContent
          sectionsOfCourse={courseData.sections}
          totalCourseSections={courseData.sections.length}
          totalCourseDuration={courseData.totalCourseDuration}
          totalCourseLessons={courseData.totalCourseLessons}
          requirements={courseData.courseRequirements}
          description={courseData.courseDescription}
          whoThisFor={courseData.whoThisCourseIsFor}
        />

        {/* Recommended Courses */}
        <StudentsAlsoBought />
        <FrequentlyBoughtTogether />

        {/* Instructor Section */}
        <InstructorSection
          instructorImg={courseData.courseInstructor.profilePic}
          instructorName={courseData.courseInstructor.fullName}
          descriptionInstructor={courseData.courseInstructorDescription}
        />

        {/* Reviews Section */}
        <ReviewsSection
          reviewsToRender={courseData.reviews}
          avgRating={courseData.averageRating}
        />

        {/* Additional Features */}
        <MoreCoursesByInstructor
          instructorName={courseData.courseInstructor.fullName}
        />
        <ReportAbuse />
      </div>

      {/* Preview Card */}
      <CoursePreviewCard
        firstLessonId={courseData.sections?.[0]?.lessons?.[0]?._id}
        courseId={courseData._id}
        courseImg={courseData.courseImg}
        coursePrice={courseData.courseDiscountPrice}
        fullPrice={courseData.courseFullPrice}
      />
    </div>
  );
};

export default ViewCoursePageInfo;
