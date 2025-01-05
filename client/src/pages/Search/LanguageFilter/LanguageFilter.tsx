import { Checkbox } from "@/components/ui/checkbox";
import { languages } from "@/utils/languanges";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const LanguageFilter = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className={isClicked ? "h-[50px]" : "h-full"}>
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg" onClick={handleClick}>
          Language
        </p>
        <MdKeyboardArrowUp />
      </div>
      {languages.map((language) => (
        <div className="flex gap-[0.5em] text-languageText text-[0.8em] py-[0.5em] cursor-pointer">
          <p>
            <Checkbox className="rounded-none" />
          </p>
          <p>{language.name}</p>
          <p className="text-weakGray">({language.count})</p>
        </div>
      ))}
      <button>Show less</button>
    </div>
  );
};

export default LanguageFilter;
