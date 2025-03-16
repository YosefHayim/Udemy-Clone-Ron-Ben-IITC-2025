import { Checkbox } from "@/components/ui/checkbox";
import { filterContext } from "@/routes/AppRoutes";
import { DummyData, FilterProps } from "@/types/types";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { useContext, useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowUp } from "react-icons/md";
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
    }

    if (filterTitle === "Hands-on Practice") {
      if (filterData.handsOnPractice.has(name)) {
        filterData.handsOnPractice.delete(name);
      } else {
        filterData.handsOnPractice.add(name);
      }
      setFilterData({ ...filterData });
    }

    if (filterTitle === "Video Duration") {
      if (filterData.videosDurations.has(name)) {
        filterData.videosDurations.delete(name);
      } else {
        filterData.videosDurations.add(name);
      }
      setFilterData({ ...filterData });
    }

    if (filterTitle === "Topics") {
      if (filterData.topics.has(name)) {
        filterData.topics.delete(name);
      } else {
        filterData.topics.add(name);
      }
      setFilterData({ ...filterData });
    }

    if (filterTitle === "Level") {
      if (filterData.levels.has(name)) {
        filterData.levels.delete(name);
      } else {
        filterData.levels.add(name);
      }
      setFilterData({ ...filterData });
    }

    if (filterTitle === "Subtitles") {
      if (filterData.subtitles.has(name)) {
        filterData.subtitles.delete(name);
      } else {
        filterData.subtitles.add(name);
      }
      setFilterData({ ...filterData });
    }

    if (filterTitle === "Price") {
      if (filterData.price === name) {
        filterData.price = "";
      } else {
        filterData.price = name;
      }

      setFilterData({ ...filterData });
    }
  };

  return (
    <div className={useForSection ? "bg-bgCommercial" : ""}>
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
        <div
          style={{
            maxHeight: display ? "none" : "280px",
            WebkitMaskImage: display
              ? "none"
              : "linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0))",
            maskImage: display
              ? "none"
              : "linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0))",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          {filterItems?.map((item: DummyData) => (
            <label
              key={item.name}
              className="flex gap-[0.5em] text-languageText py-[0.5em] cursor-pointer"
            >
              <Checkbox
                className="rounded-none"
                onClick={() => handleClickValue(item.name!)}
                checked={
                  filterTitle === "Language" &&
                  filterData.language.has(item.name)
                    ? true
                    : filterTitle === "Hands-on Practice" &&
                      filterData.handsOnPractice.has(item.name)
                    ? true
                    : filterTitle === "Video Duration" &&
                      filterData.videosDurations.has(item.name)
                    ? true
                    : filterTitle === "Topics" &&
                      filterData.topics.has(item.name)
                    ? true
                    : filterTitle === "Level" &&
                      filterData.levels.has(item.name)
                    ? true
                    : filterTitle === "Subtitles" &&
                      filterData.subtitles.has(item.name)
                    ? true
                    : filterTitle === "Price" && filterData.price === item.name
                }
              />
              <span>{item.name}</span>
            </label>
          ))}
        </div>
        {isClicked && (
          <div
            className="flex items-center gap-[0.5em] text-purple-600 "
            onClick={handleClick}
          >
            {display ? (
              <div
                className={`${btnStyleNHover} flex flex-row items-center justify-center gap-2`}
              >
                <button className="focus:outline-none">Show less</button>
                <MdOutlineKeyboardArrowDown />
              </div>
            ) : (
              <div
                className={`${btnStyleNHover} flex flex-row items-center justify-center gap-2`}
              >
                <button className="focus:outline-none">Show less</button>
                <MdOutlineKeyboardArrowUp />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
