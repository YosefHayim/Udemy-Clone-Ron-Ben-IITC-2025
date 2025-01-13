import { Checkbox } from "@/components/ui/checkbox";
import { DummyData, FilterProps } from "@/types/types";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filter: React.FC<FilterProps> = ({
  filterData,
  setFilterData,
  filterTitle,
  filterItems,
  chosenHeight,
  display,
  useForSection,
  showLine,
  hideIcons,
}) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  const handleFilterClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // Traverse to the closest label or relevant element
    const labelElement = target.closest("label");
    if (!labelElement) return;

    // Get the category name from the label's child span
    const category = labelElement.querySelector("span")?.textContent;

    if (category) {
      console.log(category);
    }
  };

  return (
    <div className={useForSection ? "bg-[#f7f9fa]" : ""}>
      <hr className={showLine ? "block" : "hidden"} />
      <div
        className={`transition-all overflow-hidden ${
          isClicked ? "h-auto" : `${chosenHeight}`
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <p className="font-bold text-lg pb-[1em] py-[0.5em]">{filterTitle}</p>
          {isClicked ? (
            <MdKeyboardArrowUp className={hideIcons ? "hidden" : "block"} />
          ) : (
            <MdOutlineKeyboardArrowDown
              className={hideIcons ? "hidden" : "block"}
            />
          )}
        </div>
        <div onClick={handleFilterClicked}>
          {filterItems.map((item: DummyData) => (
            <label
              key={item.name}
              className="flex gap-[0.5em] text-languageText py-[0.5em] cursor-pointer"
            >
              <Checkbox className="rounded-none" />
              <span>{item.name}</span>
            </label>
          ))}
        </div>
        {isClicked && (
          <div
            className="flex items-center gap-[0.5em] cursor-pointer"
            onClick={handleClick}
          >
            <p
              className={
                display
                  ? "text-purpleStatic hover:text-purpleHover font-bold "
                  : "hidden"
              }
            >
              Show Less
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
