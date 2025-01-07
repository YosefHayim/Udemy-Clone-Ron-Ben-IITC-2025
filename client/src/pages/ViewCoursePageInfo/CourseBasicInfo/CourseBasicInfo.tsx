import { TbInfoHexagonFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

const CourseBasicInfo = () => {
  return (
    <div className="flex flex-row gap-[0.5em] items-center">
      <TbInfoHexagonFilled />
      <p>Last updated 9/2017</p>
      <TbWorld />
      <p>English</p>
    </div>
  );
};

export default CourseBasicInfo;
