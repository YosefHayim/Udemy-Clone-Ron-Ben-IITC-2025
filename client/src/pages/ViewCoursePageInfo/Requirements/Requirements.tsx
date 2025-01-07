import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Requirements = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <div className="flex-col items-center w-[550px]">
      <hr />
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bold text-[1.2em]">Requirements</h2>
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isClicked ? "rotate-180" : "rotate-0"
          }`}
        >
          <MdOutlineKeyboardArrowUp />
        </div>
      </div>
      <ul className="list-disc">
        <li>Basic knowledge of science</li>
        <li>Fundamental ideas of current, voltage and electric field</li>
        <li>High school mathematics</li>
      </ul>
      <hr />
    </div>
  );
};

export default Requirements;
