import CourseRating from '../../CourseRating/CourseRating';
import CoursePrice from '../../StudentsAlsoBought/CoursePrice/CoursePrice';
import FaqCourseImg from '../FaqCourseImg/FaqCourseImg';
import FaqCourseName from '../FaqCourseName/FaqCourseName';
import FaqInstructName from '../FaqInstructName/FaqInstructName';
import FaqTotalStudentsCourse from '../FaqTotalStudentsCourse/FaqTotalStudentsCourse';

const FrequentlyCourseCard: React.FC<{
  courseImg: string;
  courseName: string;
  instructorName: string;
  courseFullPrice: number;
  courseDiscountPrice: number;
  courseId: string;
  totalRatings?: number;
}> = ({
  courseImg,
  courseName,
  instructorName,
  courseFullPrice,
  courseDiscountPrice,
  totalRatings,
  courseId,
}) => {
  return (
    <div className="flex flex-col p-[1em]" id={courseId}>
      <div className="flex  justify-around gap-[1em]">
        <FaqCourseImg courseImg={courseImg} />
        <div>
          <FaqCourseName courseName={courseName} />
          <FaqInstructName instructorName={instructorName} />
          <div className="flex  items-center gap-[0.5em]">
            <CourseRating colorRating="text-black" amountOfStars={4} courseRating={totalRatings} />
            <FaqTotalStudentsCourse totalRatings={totalRatings} />
          </div>
        </div>
        <div>
          <CoursePrice
            courseFullPrice={courseFullPrice}
            courseDiscountPrice={courseDiscountPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyCourseCard;
