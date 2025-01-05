import courseImgPlaceholder from "/images/image.png";

const CourseImg = ({ img, widthChosen }) => {
  return (
    <div>
      <img
        src={img || courseImgPlaceholder}
        alt=""
        className={`${widthChosen}`}
      />
    </div>
  );
};

export default CourseImg;
