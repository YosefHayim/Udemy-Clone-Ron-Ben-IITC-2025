import TriangleShape from "./TriangleShape/TriangleShape";
import InteractionsBtns from "./InteractionBtns/InteractionsBtns";
import CoursePros from "./CoursePros/CoursePros";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseBasicInfo from "@/pages/ViewCoursePageInfo/CourseBasicInfo/CourseBasicInfo";
import CourseRecap from "@/components/CourseCard/CourseRecap/CourseRecap";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";

const CourseHoverCardInfo: React.FC<{
  whatYouWillLearn: string[];
  courseName: string;
  courseId: string;
  coursePrice: number;
  fullPriceCourse: number;
  index: number;
  courseTopic: string;
  instructorId: string;
  width?: string;
  positionedLeft?: boolean;
  positionedRight?: boolean;
  showCourseLength?: boolean;
  courseLevel?: string;
  totalCourseDuration?: number;
  totalCourseLessons?: number;
  courseUpdatedAt?: Date;
  courseTag?: string;
  courseLanguages?: string;
  courseRecapInfo?: string;
  displayWhatYouLearn?: boolean;
}> = ({
  whatYouWillLearn,
  courseId,
  coursePrice,
  fullPriceCourse,
  index,
  courseTopic,
  instructorId,
  width = "32rem",
  positionedLeft = false,
  positionedRight = false,
  showCourseLength = false,
  courseLevel = "",
  totalCourseDuration = 0,
  totalCourseLessons = 0,
  courseUpdatedAt,
  courseTag,
  courseLanguages,
  courseRecapInfo,
  displayWhatYouLearn = true,
  courseName = "",
}) => {
  return (
    <div className="max-w-[320px] overflow-y-visible text-[1rem]" id={courseId}>
      <div id={courseId} className={courseId}>
        <TriangleShape
          index={index}
          positionedRight={positionedRight}
          positionedLeft={positionedLeft}
        />
        <div className={`w-[${width}] rounded-[0.5em]  bg-white p-[1.5em] shadow-alertAlgoInfo `}>
          <div className="text-[1.2rem]">
            <CourseTitle title={courseName} />
          </div>
          {showCourseLength && (
            <div className="flex  w-max items-center justify-start text-[0.875rem]">
              <CourseTag tagName={courseTag} />
              <CourseBasicInfo
                isDisplayMonthName={true}
                lastUpdated={courseUpdatedAt}
                courseLanguage={courseLanguages}
              />
            </div>
          )}
          {showCourseLength && (
            <div className="my-1">
              <CourseLength
                isSmallText={true}
                courseLevel={courseLevel}
                totalMinutes={totalCourseDuration}
                totalLectures={totalCourseLessons}
              />
            </div>
          )}
          {showCourseLength && <CourseRecap recapInfo={courseRecapInfo} />}
          <CoursePros
            whatYouWillLearn={whatYouWillLearn}
            displayWhatYouLearn={displayWhatYouLearn}
          />
          <InteractionsBtns
            isDisplayHeart={true}
            instructorId={instructorId}
            courseTopic={courseTopic}
            courseId={courseId}
            coursePrice={coursePrice}
            fullPriceCourse={fullPriceCourse}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHoverCardInfo;
