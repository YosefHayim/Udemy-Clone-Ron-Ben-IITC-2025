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

  const handleClickValue = (name: string) => {
    if (filterTitle === "Language") {
      if (filterData.language.has(name)) {
        filterData.language.delete(name); // Remove if it exists
      } else {
        filterData.language.add(name); // Add if it doesn't exist
      }
      setFilterData({ ...filterData });
      console.log(`Updated language set:`, Array.from(filterData.language));
    }

    if (filterTitle === "Hands-on Practice") {
      if (filterData.handsOnPractice.has(name)) {
        filterData.handsOnPractice.delete(name);
      } else {
        filterData.handsOnPractice.add(name);
      }
      setFilterData({ ...filterData });
      console.log(
        `Updated hands-on practice set:`,
        Array.from(filterData.handsOnPractice)
      );
    }

    if (filterTitle === "Video Duration") {
      if (filterData.videosDurations.has(Number(name))) {
        filterData.videosDurations.delete(Number(name));
      } else {
        filterData.videosDurations.add(Number(name));
      }
      setFilterData({ ...filterData });
      console.log(
        `Updated video duration set:`,
        Array.from(filterData.videosDurations)
      );
    }

    if (filterTitle === "Topics") {
      if (filterData.topics.has(name)) {
        filterData.topics.delete(name);
      } else {
        filterData.topics.add(name);
      }
      setFilterData({ ...filterData });
      console.log(`Updated topics set:`, Array.from(filterData.topics));
    }

    if (filterTitle === "Level") {
      if (filterData.levels.has(name)) {
        filterData.levels.delete(name);
      } else {
        filterData.levels.add(name);
      }
      setFilterData({ ...filterData });
      console.log(`Updated levels set:`, Array.from(filterData.levels));
    }

    if (filterTitle === "Subtitles") {
      if (filterData.subtitles.has(name)) {
        filterData.subtitles.delete(name);
      } else {
        filterData.subtitles.add(name);
      }
      setFilterData({ ...filterData });
      console.log(`Updated subtitles set:`, Array.from(filterData.subtitles));
    }

    if (filterTitle === "Price") {
      if (filterData.price === name) {
        filterData.price = "";
      } else {
        filterData.price = name;
      }

      setFilterData({ ...filterData });
      console.log(`Updated price:`, filterData.price || "None");
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
        <div>
          {filterItems?.map((item: DummyData) => (
            <label
              key={item.name}
              onClick={() => handleClickValue(item.name!)}
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
