import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import { CourseData } from "@/types/types";

const ViewCoursePageInfo = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // Sanitize courseId
  const sanitizedCourseId = courseId?.trim().replace(/^:/, "");

  const { data, isLoading, error } = useQuery<CourseData>({
    queryKey: ["course", sanitizedCourseId],
    queryFn: async () => {
      if (!sanitizedCourseId) {
        throw new Error("Course ID is missing");
      }
      return await getCourseById(sanitizedCourseId);
    },
    enabled: !!sanitizedCourseId,
  });

  if (data && data?.courseName) {
    document.title = data.courseName;
  }

  if (isLoading) {
    return (
      <div>
        <Loader hSize="1000px" useSmallLoading={false} />
      </div>
    );
  }

  if (error) {
    return navigate("/not/found");
  }

  return (
    <div>
      <div className="flex w-2/5 flex-row items-start justify-start gap-[3em] p-[3em]">
        <div className="flex w-full flex-col items-start justify-start gap-[1em]">
          <div className="absolute left-0 top-[8%] h-[350px] w-full bg-blackUdemy"></div>
          <StickyCourseNavbar
            courseName={data?.courseName}
            totalStudents={data?.totalStudentsEnrolled?.count}
            avgRating={data?.averageRating}
            totalRatings={data?.totalRatings}
          />
          <TopicPathMenu
            category={data?.category}
            subcategory={data?.subCategory}
            topic={data?.courseTopic}
          />
          <CourseBigTitle courseTitle={data?.courseName} />
          <CourseRecap recapInfo={data?.courseRecapInfo} />
          <div className="flex w-full flex-row items-center justify-start gap-[0.5em]">
            <CourseTag tagName={data?.courseTag} />
            <CourseRating amountOfStars={data?.averageRating} />
            <CourseStudentRatings
              totalRated={data?.totalRatings}
              totalStudents={data?.totalStudentsEnrolled?.count}
            />
          </div>
          <CourseCreatedBy
            instructorName={data?.courseInstructor?.fullName}
            instructorId={data?.courseInstructor?._id}
          />
          <CourseBasicInfo
            lastUpdated={data?.updatedAt}
            courseLanguage={data?.courseLanguages}
          />
          <WhatYouLearn prosCourse={data?.whatYouWillLearn} />
          <ExploreTopics
            category={data?.category}
            subCategory={data?.subCategory}
            topic={data?.courseTopic}
          />
          <CourseContent
            sectionsOfCourse={data?.sections}
            totalCourseSections={data?.sections?.length}
            totalCourseDuration={data?.totalCourseDuration}
            totalCourseLessons={data?.totalCourseLessons}
            requirements={data?.courseRequirements}
            description={data?.courseDescription}
            whoThisFor={data?.whoThisCourseIsFor}
          />
          <StudentsAlsoBought />
          <FrequentlyBoughtTogether instructorId={data?.courseInstructor._id} />
          <InstructorSection
            instructorHeadline={data?.courseInstructor?.headline}
            instructorId={data?.courseInstructor?._id}
            instructorImg={data?.courseInstructor?.profilePic}
            instructorName={data?.courseInstructor?.fullName}
            descriptionInstructor={data?.courseInstructorDescription}
          />
          <ReviewsSection
            reviewsToRender={data?.reviews}
            avgRating={data?.averageRating}
          />
          <MoreCoursesByInstructor
            instructorName={data?.courseInstructor?.fullName}
          />
          <ReportAbuse />
        </div>
      </div>
      <CoursePreviewCard
        courseTopic={data?.courseTopic}
        instructorId={data?.courseInstructor?._id}
        firstLessonId={data?.sections?.[0]?.lessons?.[0]?._id}
        courseId={data?._id}
        courseImg={data?.courseImg}
        coursePrice={data?.courseDiscountPrice}
        fullPrice={data?.courseFullPrice}
        discountPrice={data?.courseDiscountPrice}
      />
    </div>
  );
};

export default ViewCoursePageInfo;
