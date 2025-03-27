const TriangleShape: React.FC<{
  index: number;
  positionedRight?: boolean;
  positionedLeft?: boolean;
}> = ({ index = 0, positionedRight, positionedLeft }) => {
  return (
    <div>
      {/* // This is when hovering left */}
      {index >= 0 && positionedLeft && (
        <div
          className={`-translate-x-1/2" absolute right-[94.1%] top-[45%] z-10 flex -rotate-90 transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center ">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-100 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}
      {/* // This is when hovering right */}
      {index >= 0 && positionedRight && (
        <div
          className={`-translate-x-1/2" absolute left-[93.5%] top-[45%] z-10 flex rotate-90 transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center ">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-100 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}

      {/* // This is when hovering top or from bottom */}
      {index === 0 && !positionedRight && !positionedLeft && (
        <div
          className={` -translate-x-1/2" z-10flex bg-gre absolute left-[180px] top-[-10px] transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-100 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}

      {index === 1 && !positionedRight && !positionedLeft && (
        <div
          className={`-translate-x-1/2" absolute bottom-[-10px] left-[180px] z-10 flex rotate-180 transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-100 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}

      {index > 1 && (
        <div
          className={`-translate-x-1/2" absolute bottom-[-10px] left-[180px] z-10 flex rotate-180 transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-100 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TriangleShape;
