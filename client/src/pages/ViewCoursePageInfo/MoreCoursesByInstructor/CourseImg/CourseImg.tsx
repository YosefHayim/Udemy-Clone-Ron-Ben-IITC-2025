import courseImg from '/images/more-courses-by-instructor.png';

const CourseImg: React.FC = () => {
  return (
    <div>
      <img src={courseImg} alt="" className="h-[10em]" />
    </div>
  );
};

export default CourseImg;
