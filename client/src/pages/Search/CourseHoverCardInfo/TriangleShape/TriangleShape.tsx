const TriangleShape: React.FC<{ index: number }> = ({ index = 0 }) => {
  return (
    <div>
      {index === 0 && (
        <div
          className={` top-[-5%] absolute left-[45%] transform -translate-x-1/2"
      flex items-center justify-center z-10`}
        >
          <div className="w-[50px] flex items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="w-full h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-gray-500"></div>
              <div className="absolute w- h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-white"></div>
            </div>
          </div>
        </div>
      )}
      {index === 1 && (
        <div
          className={`rotate-180 bottom-[-4.6%] absolute left-[45%] transform -translate-x-1/2"
      flex items-center justify-center z-10`}
        >
          <div className="w-[50px] flex items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="w-full h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-gray-500"></div>
              <div className="absolute w- h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-white"></div>
            </div>
          </div>
        </div>
      )}
      {index > 1 && (
        <div
          className={`rotate-180 bottom-[-4.6%] absolute left-[45%] transform -translate-x-1/2"
      flex items-center justify-center z-10`}
        >
          <div className="w-[50px] flex items-center justify-center">
            {/* Wrapper triangle with thick gray border and white fill */}
            <div className="relative flex items-center justify-center">
              <div className="w-full h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-gray-500"></div>
              <div className="absolute w- h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-white"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TriangleShape;
