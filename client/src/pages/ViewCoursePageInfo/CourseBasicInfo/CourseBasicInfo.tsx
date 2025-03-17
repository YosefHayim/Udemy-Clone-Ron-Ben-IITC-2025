import { CourseBasicInfoProps } from "@/types/types";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

const CourseBasicInfo: React.FC<CourseBasicInfoProps> = ({
  lastUpdated,
  courseLanguage,
}) => {
  // Extract month and year
  const date = new Date(lastUpdated);
  const formattedDate = `Last updated ${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="flex flex-row gap-[0.5em] text-white items-center z-10 ">
      <TbInfoHexagonFilled />
      <p className="text-[#8cd3b0]">{formattedDate}</p>
      <TbWorld />
      <p>{courseLanguage}</p>
    </div>
  );
};

export default CourseBasicInfo;
