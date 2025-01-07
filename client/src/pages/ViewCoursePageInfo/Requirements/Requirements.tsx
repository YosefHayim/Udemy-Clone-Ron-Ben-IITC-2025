import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Requirements = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <div className="flex flex-row items-center">
      <hr />
      <h2 className="font-bold">Requirements</h2>
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isClicked ? "rotate-180" : "rotate-0"
        }`}
      >
        <MdOutlineKeyboardArrowUp />
      </div>
      <ul>
        <li>Basic knowledge of science</li>
        <li>Fundamental ideas of current, voltage and electric field</li>
        <li>High school mathematics</li>
      </ul>
      <hr />
    </div>
  );
};

export default Requirements;
