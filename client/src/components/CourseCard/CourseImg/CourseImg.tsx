import courseImgPlaceholder from "/images/image.png";

const CourseImg = ({
  img = courseImgPlaceholder,
  widthChosen = "w-[260px]",
}) => {
  return (
    <div>
      <img src={img} alt="" className={`${widthChosen}`} />
    </div>
  );
};

export default CourseImg;
