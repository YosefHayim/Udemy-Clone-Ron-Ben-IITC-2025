import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const SaleCommercialTwo = () => {
  const [hiddenCommercial, setHiddenCommercial] = useState(
    localStorage.getItem("hiddenCommercial") === "true"
  );

  const handleCommercial = () => {
    setHiddenCommercial(true);
    localStorage.setItem("hiddenCommercial", "true");
  };

  return (
    <div
      className={`${
        hiddenCommercial ? "hidden" : "flex flex-wrap flex-grow"
      } p-[1em] text-center text-white bg-[#5022C2]`}
    >
      <p>
        <span className="font-bold">Future-ready skills on your schedule</span>{" "}
        |{" "}
        <span className="font-light underline">
          Learn on iOS, Android, and more.
        </span>
      </p>
      <button
        className="hover:bg-purpleHoverBtn p-[1em] rounded-[0.2em] cursor-pointer border-none bg-none"
        onClick={handleCommercial}
      >
        <HiOutlineXMark className="text-[1.5em]" />
      </button>
    </div>
  );
};

export default SaleCommercialTwo;
