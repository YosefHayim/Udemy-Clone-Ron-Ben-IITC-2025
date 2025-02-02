import { CourseImgProps } from "@/types/types";
import courseImgPlaceholder from "/images/image.png";

const CourseImg: React.FC<CourseImgProps> = ({
  courseImg = courseImgPlaceholder,
  widthChosen = "260px",
}) => {
  return (
    <div>
      <img src={courseImg} alt="" className={`w-[${widthChosen}] h-[135px]`} />
    </div>
  );
};

export default CourseImg;
