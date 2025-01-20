import { Checkbox } from "@/components/ui/checkbox";
import { filterContext } from "@/routes/AppRoutes";
import { DummyData, FilterProps } from "@/types/types";
import { useContext, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filter: React.FC<FilterProps> = ({
  filterTitle,
  filterItems,
  chosenHeight,
  display,
  useForSection,
  showLine,
  hideIcons,
}) => {
  const [isClicked, setClicked] = useState(false);
  const [filterData, setFilterData] = useContext(filterContext);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
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
        <div>
          {filterItems?.map((item: DummyData) => (
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
