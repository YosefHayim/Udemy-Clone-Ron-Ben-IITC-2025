import { monthNames } from '@/utils/monthNames';
import { TbInfoHexagonFilled } from 'react-icons/tb';
import { TbWorld } from 'react-icons/tb';

const CourseBasicInfo = ({ lastUpdated, courseLanguage, isDisplayMonthName }) => {
  const date = new Date(lastUpdated);

  const formattedDate = isDisplayMonthName
    ? `Updated ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    : `Last updated ${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className="flex w-full items-center justify-start gap-2 text-white">
      <TbInfoHexagonFilled />
      <p className={`${isDisplayMonthName ? 'font-sans font-extrabold text-[#206241]' : ''}`}>
        {formattedDate}
      </p>
      {!isDisplayMonthName && <TbWorld />}
      <p>{courseLanguage}</p>
    </div>
  );
};

export default CourseBasicInfo;
