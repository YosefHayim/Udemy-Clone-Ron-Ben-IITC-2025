import courseImgPlaceholder from "/images/image.png";

const CourseImg = ({
  courseImg = courseImgPlaceholder,
  widthChosen = "w-[260px]",
}) => {
  return (
    <div>
      <img src={courseImg} alt="" className={`${widthChosen}`} />
    </div>
  );
};

export default CourseImg;
