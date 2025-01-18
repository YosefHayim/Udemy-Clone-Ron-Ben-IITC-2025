import frequentlyBoughtImg from "/images/frequently-bought-course.png";

const FaqCourseImg: React.FC = () => {
  return (
    <div>
      <img
        src={frequentlyBoughtImg}
        alt=""
        className="h-[8em] border border-b-gray-300"
      />
    </div>
  );
};

export default FaqCourseImg;
