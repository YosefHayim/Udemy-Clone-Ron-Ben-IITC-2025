import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Requirements: React.FC<{ requirements: string[] }> = ({
  requirements,
}) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isClicked ? "h-auto" : "h-[100px]"
      } w-[550px] cursor-pointer flex-col items-center`}
    >
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-[1em] mt-[1.5em] font-sans text-[1.2em] font-extrabold">
          Requirements
        </h2>
        <div className={`${isClicked ? "rotate-0" : "rotate-180"}`}>
          <MdOutlineKeyboardArrowUp />
        </div>
      </div>
      {isClicked && (
        <ul className="ml-[1em] flex list-disc flex-col gap-[0.5em] py-[0.5em]">
          {requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default Requirements;
