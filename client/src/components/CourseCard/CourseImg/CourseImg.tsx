import { CourseImgProps } from "@/types/types";
import courseImgPlaceholder from "/images/image.png";

const CourseImg: React.FC<CourseImgProps> = ({
  courseImg = courseImgPlaceholder,
  widthChosen = "200px",
}) => {
  console.log(courseImg);

  return (
    <div className="mr-2">
      <img src={courseImg} alt="" className={`w-full`} />
    </div>
  );
};

export default CourseImg;
