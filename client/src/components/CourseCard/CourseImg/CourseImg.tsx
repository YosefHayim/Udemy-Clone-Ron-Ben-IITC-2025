import { CourseImgProps } from "@/types/types";
import courseImgPlaceholder from "/images/image.png";

const CourseImg: React.FC<CourseImgProps> = ({
  courseImg = courseImgPlaceholder,
  widthChosen = "200px",
}) => {
  return (
    <div className="mr-2 border">
      <img src={courseImg} alt="" className={`w-full`} />
    </div>
  );
};

export default CourseImg;
