import CourseBasicInfo from "./CourseBasicInfo/CourseBasicInfo";
import CourseBigTitle from "./CourseBigTitle/CourseBigTitle";
import CourseContent from "./CourseContent/CourseContent";
import CourseCreatedBy from "./CourseCreatedBy/CourseCreatedBy";
import CourseRecap from "./CourseRecap/CourseRecap";
import CourseStudentRatings from "./CourseStudentsRatings/CourseStudentRatings";
import ExploreTopics from "./ExploreTopics/ExploreTopics";
import TopicPathMenu from "./TopicPathMenu/TopicPathMenu";
import WhatYouLearn from "./WhatYouLearn/WhatYouLearn";

const ViewCoursePageInfo = () => {
  return (
    <div>
      <div className="bg-[#1c1d1f] text-white">
        <TopicPathMenu />
        <CourseBigTitle />
        <CourseRecap />
        <CourseStudentRatings />
        <CourseCreatedBy />
        <CourseBasicInfo />
        <WhatYouLearn />
        <ExploreTopics />
        <CourseContent />
      </div>
    </div>
  );
};

export default ViewCoursePageInfo;
