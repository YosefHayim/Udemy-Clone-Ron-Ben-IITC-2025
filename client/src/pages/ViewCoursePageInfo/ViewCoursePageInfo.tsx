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

const ViewCoursePageInfo = () => {
  return (
    <div className="flex flex-row p-[3em] items-start justify-start w-full gap-[3em]">
      <div className="flex flex-col items-start justify-start gap-[1em]">
        <div className="bg-[#1c1d1f] h-[350px] absolute w-full left-0 top-[9%]"></div>
        <StickyCourseNavbar />
        <TopicPathMenu />
        <CourseBigTitle />
        <CourseRecap />
        <div className="flex flex-row items-start justify-start gap-[0.5em]">
          <CourseRating amountOfStars={4} />
          <CourseStudentRatings />
        </div>
        <CourseCreatedBy />
        <CourseBasicInfo />
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
      <CoursePreviewCard />
    </div>
  );
};

export default ViewCoursePageInfo;
