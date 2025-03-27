import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

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
  useCustom = false,
  showDirectionalButtonsOnlyOnEdge = false,
  topPosition = '67%',
  leftPosition = '1%',
  bottomPosition = '0%',
  rightPosition = '0%',
}) => {
  const showLeft = !useCustom || (showDirectionalButtonsOnlyOnEdge ? state > 0 : state >= 0);
  const showRight = !useCustom || (showDirectionalButtonsOnlyOnEdge ? state === 0 : state >= 0);

  return (
    <div>
      {showLeft && (
        <div
          className="absolute z-10 h-min rounded-full bg-white shadow-alertAlgoInfo"
          style={{
            left: leftPosition,
            top: topPosition,
            bottom: bottomPosition,
          }}
        >
          <button
            className="z-10 h-min rounded-full p-1 hover:bg-gray-200 focus:outline-none"
            onClick={handleFnPrev}
          >
            <RiArrowLeftSLine size={30} />
          </button>
        </div>
      )}

      {showRight && (
        <div
          className="absolute z-10 h-min rounded-full bg-white shadow-alertAlgoInfo"
          style={{
            right: rightPosition,
            top: topPosition,
            bottom: bottomPosition,
          }}
        >
          <button
            className="h-min rounded-full p-1 hover:bg-gray-200 focus:outline-none"
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
