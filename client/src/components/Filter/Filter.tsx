import { Checkbox } from "@/components/ui/checkbox";
import { DummyData, FilterProps } from "@/types/types";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filter: React.FC<FilterProps> = ({
  filterTitle,
  filterItems,
  chosenHeight,
  display,
  setDisplay,
}) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div
      className={`transition-all overflow-hidden ${
        isClicked ? "h-auto" : `${chosenHeight}`
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-bold text-lg">{filterTitle}</p>
        {isClicked ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>

      <div>
        {filterItems.map((item: DummyData) => (
          <div
            key={item.name}
            className="flex gap-[0.5em] text-languageText text-[0.8em] py-[0.5em] cursor-pointer"
          >
            <p>
              <Checkbox className="rounded-none" />
            </p>
            <p>{item.name}</p>
            <p className="text-weakGray">({item.count})</p>
          </div>
        ))}
      </div>

      {isClicked && (
        <div
          className="flex items-center gap-[0.5em] cursor-pointer"
          onClick={handleClick}
        >
          <p
            className={
              display ? "text-showLess font-bold text-[0.8em]" : "hidden"
            }
          >
            Show Less
          </p>
          <MdKeyboardArrowUp />
        </div>
      )}
    </div>
  );
};

export default Filter;
