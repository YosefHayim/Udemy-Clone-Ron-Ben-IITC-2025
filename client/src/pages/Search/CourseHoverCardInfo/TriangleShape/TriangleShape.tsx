const TriangleShape: React.FC<{ index: number }> = ({ index = 0 }) => {
  return (
    <div>
      {index === 0 && (
        <div
          className={` -translate-x-1/2" absolute left-[45%] top-[-5%] z-10
      flex transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-500 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}
      {index === 1 && (
        <div
          className={`-translate-x-1/2" absolute bottom-[-4.6%] left-[45%] z-10 flex
      rotate-180 transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-500 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}
      {index > 1 && (
        <div
          className={`-translate-x-1/2" absolute bottom-[-4.6%] left-[45%] z-10 flex
      rotate-180 transform items-center justify-center`}
        >
          <div className="flex w-[50px] items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="h-0 w-full border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-gray-500 border-l-transparent border-r-transparent"></div>
              <div className="w- absolute h-0 border-b-[11.875px] border-l-[5.625px] border-r-[5.625px] border-white border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TriangleShape;
