import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Requirements = ({ requirements }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isClicked ? "h-auto" : "h-[100px]"
      } flex-col items-center w-[550px] cursor-pointer`}
    >
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bold text-[1.2em] mt-[1.5em] mb-[1em]">
          Requirements
        </h2>
        <div className={`${isClicked ? "rotate-0" : "rotate-180"}`}>
          <MdOutlineKeyboardArrowUp />
        </div>
      </div>
      {isClicked && (
        <ul className="list-disc py-[0.5em] ml-[1em] flex flex-col gap-[0.5em]">
          {requirements.map((requirement) => (
            <li>{requirement}</li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default Requirements;
