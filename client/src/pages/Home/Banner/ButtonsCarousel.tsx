import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ButtonsCarousel = ({
  handleFnPrev,
  handleFnNext,
  state,
  useCustom,
  topPosition = "67%",
  leftPosition = "1%",
  bottomPosition = "0%",
  rightPosition = "0%",
}) => {
  return (
    <div>
      <div
        className={`absolute z-10 rounded-full bg-white shadow-alertAlgoInfo left-[${leftPosition}] top-[${topPosition}] bottom-[${bottomPosition}]`}
      >
        <button
          className={`${useCustom && state >= 0 && "block"} rounded-full p-2 hover:bg-gray-200 focus:outline-none`}
          onClick={handleFnPrev}
        >
          <RiArrowLeftSLine size={24} />
        </button>
      </div>
      <div
        className={`absolute z-10 rounded-full bg-white shadow-alertAlgoInfo right-[${rightPosition}] top-[${topPosition}] bottom-[${bottomPosition}]`}
      >
        <button
          className={`${useCustom && state >= 0 && "block"} rounded-full p-2 hover:bg-gray-200 focus:outline-none`}
          onClick={handleFnNext}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  );
};

export default ButtonsCarousel;
