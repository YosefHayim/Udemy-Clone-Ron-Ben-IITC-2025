import { CourseBasicInfoProps } from "@/types/types";
import { monthNames } from "@/utils/monthNames";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

const CourseBasicInfo = ({
  lastUpdated,
  courseLanguage,
  isDisplayMonthName,
}) => {
  const date = new Date(lastUpdated);

  const formattedDate = isDisplayMonthName
    ? `Updated ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    : `Last updated ${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className="flex w-full flex-row items-center text-white">
      <TbInfoHexagonFilled />
      <p className="font-bold text-[#206241]">{formattedDate}</p>
      <TbWorld />
      <p>{courseLanguage}</p>
    </div>
  );
};

export default CourseBasicInfo;
