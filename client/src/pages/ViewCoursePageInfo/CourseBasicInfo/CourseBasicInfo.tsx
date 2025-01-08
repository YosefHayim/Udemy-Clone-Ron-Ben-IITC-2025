import { TbInfoHexagonFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

const CourseBasicInfo = ({ lastUpdated, courseLanguage }) => {
  // Extract month and year
  const date = new Date(lastUpdated);
  const formattedDate = `Last updated ${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="flex flex-row gap-[0.5em] items-center text-white z-10">
      <TbInfoHexagonFilled />
      <p>{formattedDate}</p>
      <TbWorld />
      <p>{courseLanguage}</p>
    </div>
  );
};

export default CourseBasicInfo;
