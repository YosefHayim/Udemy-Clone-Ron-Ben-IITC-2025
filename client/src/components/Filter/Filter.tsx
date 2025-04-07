import { Checkbox } from "@/components/ui/checkbox";
import { FilterContext } from "@/Contexts/FilterSearch";
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
  const {
    filterData,
    setLanguage,
    setHandsOnPractice,
    setVideosDurations,
    setTopics,
    setLevels,
    setSubtitles,
    setPrice,
  } = useContext(FilterContext);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  const handleClickValue = (name: string) => {
    if (filterTitle === "Language") {
      const updated = new Set(filterData.language);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      setLanguage(updated);
    }

    if (filterTitle === "Hands-on Practice") {
      const updated = new Set(filterData.handsOnPractice);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      setHandsOnPractice(updated);
    }

    if (filterTitle === "Video Duration") {
      const updated = new Set(filterData.videosDurations);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      setVideosDurations(updated);
    }

    if (filterTitle === "Topics") {
      const updated = new Set(filterData.topics);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      setTopics(updated);
    }

    if (filterTitle === "Level") {
      const updated = new Set(filterData.levels);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      setLevels(updated);
    }

    if (filterTitle === "Subtitles") {
      const updated = new Set(filterData.subtitles);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      setSubtitles(updated);
    }

    if (filterTitle === "Price") {
      setPrice(filterData.price === name ? "" : name);
    }
  };

  return (
    <div className={useForSection ? "bg-bgCommercial" : ""}>
      <hr className={showLine ? "block" : "hidden"} />
      <div className={`overflow-hidden transition-all ${isClicked ? "h-auto" : `${chosenHeight}`}`}>
        <div className="flex cursor-pointer items-center justify-between" onClick={handleClick}>
          <p className="py-[0.5em] pb-[1em] font-sans text-lg font-extrabold">{filterTitle}</p>
          {isClicked ? (
            <MdKeyboardArrowUp size={17} className={hideIcons ? "hidden" : "block"} />
          ) : (
            <MdOutlineKeyboardArrowDown size={17} className={hideIcons ? "hidden" : "block"} />
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
              className="flex cursor-pointer gap-[0.5em] py-[0.5em] text-languageText"
            >
              <Checkbox
                className="rounded-[0.1em] border-2 border-black focus:outline-none"
                onClick={() => handleClickValue(item.name!)}
                checked={
                  filterTitle === "Language" && filterData.language.has(item.name)
                    ? true
                    : filterTitle === "Hands-on Practice" &&
                        filterData.handsOnPractice.has(item.name)
                      ? true
                      : filterTitle === "Video Duration" &&
                          filterData.videosDurations.has(item.name)
                        ? true
                        : filterTitle === "Topics" && filterData.topics.has(item.name)
                          ? true
                          : filterTitle === "Level" && filterData.levels.has(item.name)
                            ? true
                            : filterTitle === "Subtitles" && filterData.subtitles.has(item.name)
                              ? true
                              : filterTitle === "Price" && filterData.price === item.name
                                ? true
                                : false
                }
              />
              <span>{item.name}</span>
            </label>
          ))}
        </div>
        {isClicked && (
          <div className="flex items-center gap-[0.5em] " onClick={handleClick}>
            {display ? (
              <div className={`${btnStyleNHover} flex flex-row items-center justify-center gap-2`}>
                <button className="focus:outline-none">Show less</button>
                <MdOutlineKeyboardArrowDown size={17} />
              </div>
            ) : (
              <div className={`${btnStyleNHover} flex flex-row items-center justify-center gap-2`}>
                <button className="focus:outline-none">Show less</button>
                <MdOutlineKeyboardArrowUp size={17} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
