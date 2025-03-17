import { CourseImgProps } from "../../types/types";
import courseImgPlaceholder from "/images/image.png";

const CourseImg: React.FC<CourseImgProps> = ({
  courseImg = courseImgPlaceholder,
  widthChosen = "200px",
}) => {
  return (
    <div className="mr-2">
      <img src={courseImg} alt="" className={`w-[${widthChosen}] h-[130px]`} />
    </div>
  );
};

export default CourseImg;
