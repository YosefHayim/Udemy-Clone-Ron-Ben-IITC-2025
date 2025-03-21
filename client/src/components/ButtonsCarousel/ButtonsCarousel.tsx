import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

/**
 * ButtonsCarousel - Navigation arrows for a carousel.
 *
 * @param {Function} handleFnPrev - Function triggered on clicking the left arrow.
 * @param {Function} handleFnNext - Function triggered on clicking the right arrow.
 * @param {number} state - Current index or step in the carousel.
 * @param {boolean} useCustom - Enables showing buttons based on state logic.
 * @param {boolean} showDirectionalButtonsOnlyOnEdge - If true, shows only right on index 0, only left above 0.
 * @param {string} topPosition - Top position CSS value.
 * @param {string} leftPosition - Left position CSS value.
 * @param {string} bottomPosition - Bottom position CSS value.
 * @param {string} rightPosition - Right position CSS value.
 */
const ButtonsCarousel = ({
  handleFnPrev,
  handleFnNext,
  state,
  useCustom,
  showDirectionalButtonsOnlyOnEdge = false,
  topPosition = "67%",
  leftPosition = "1%",
  bottomPosition = "0%",
  rightPosition = "0%",
}) => {
  const showLeft = useCustom
    ? showDirectionalButtonsOnlyOnEdge
      ? state > 0
      : state >= 0
    : true;

  const showRight = useCustom
    ? showDirectionalButtonsOnlyOnEdge
      ? state === 0
      : state >= 0
    : true;

  return (
    <div>
      {showLeft && (
        <div
          className={`absolute z-10 rounded-full bg-white shadow-alertAlgoInfo left-[${leftPosition}] top-[${topPosition}] bottom-[${bottomPosition}]`}
        >
          <button
            className="rounded-full p-2 hover:bg-gray-200 focus:outline-none"
            onClick={handleFnPrev}
          >
            <RiArrowLeftSLine size={30} />
          </button>
        </div>
      )}

      {showRight && (
        <div
          className={`absolute z-10 rounded-full bg-white shadow-alertAlgoInfo right-[${rightPosition}] top-[${topPosition}] bottom-[${bottomPosition}]`}
        >
          <button
            className="rounded-full p-2 hover:bg-gray-200 focus:outline-none"
            onClick={handleFnNext}
          >
            <RiArrowRightSLine size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonsCarousel;
