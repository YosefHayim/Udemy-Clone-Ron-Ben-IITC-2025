import { useQuery } from "@tanstack/react-query";
import CourseBasicInfo from "./CourseBasicInfo/CourseBasicInfo";
import CourseBigTitle from "./CourseBigTitle/CourseBigTitle";
import CourseContent from "./CourseContent/CourseContent";
import CourseCreatedBy from "./CourseCreatedBy/CourseCreatedBy";
import CoursePreviewCard from "./CoursePreviewCard/CoursePreviewCard";
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
import getCourseById from "@/api/courses/getCourseById";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader/Loader";

const ViewCoursePageInfo = () => {
  const params = useParams();
  let courseId = params.courseId;

  if (!courseId) {
    return;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourseById(courseId.replace(/^:/, "")),
    enabled: !!courseId,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="flex flex-row p-[3em] items-start justify-start w-full gap-[3em]">
      <div className="flex flex-col items-start justify-start gap-[1em]">
        <div className="bg-[#1c1d1f] h-[350px] absolute w-full left-0 top-[9%]"></div>
        <StickyCourseNavbar
          courseName={data.courseName}
          totalStudents={data.totalStudentsEnrolled.count}
          avgRating={data.averageRating}
          totalRatings={data.totalRatings}
        />
        <TopicPathMenu />
        <CourseBigTitle courseTitle={data.courseName} />
        <CourseRecap recapInfo={data.courseRecapInfo} />
        <div className="flex flex-row items-start justify-start gap-[0.5em]">
          <CourseRating amountOfStars={4} />
          <CourseStudentRatings
            totalRated={data.totalRatings}
            totalStudents={data.totalStudentsEnrolled.count}
          />
        </div>
        <CourseCreatedBy />
        <CourseBasicInfo
          lastUpdated={data.updatedAt}
          courseLanguage={data.courseLanguages}
        />
        <WhatYouLearn />
        <ExploreTopics />
        <CourseContent />
        <StudentsAlsoBought />
        <FrequentlyBoughtTogether />
        <InstructorSection />
        <ReviewsSection />
        <MoreCoursesByInstructor />
        <ReportAbuse />
      </div>
      <CoursePreviewCard
        courseImg={data.courseImg}
        discountPrice={data.courseDiscountPrice}
        fullPrice={data.courseFullPrice}
      />
    </div>
  );
};

export default ViewCoursePageInfo;
