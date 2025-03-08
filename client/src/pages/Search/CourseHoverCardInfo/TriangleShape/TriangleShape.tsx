const TriangleShape: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div
      className={`${
        index > 1 &&
        "rotate-180 bottom-[-5%] absolute left-1/2 transform -translate-x-1/2"
      } flex items-center justify-center pt-[2em]`}
    >
      <div className="w-[50px] flex items-center justify-center">
        {/* Wrapper triangle with thick gray border and white fill */}
        <div className="relative flex items-center justify-center">
          <div className="w-0 h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-gray-500"></div>
          <div className="absolute w-0 h-0 border-l-[5.625px] border-r-[5.625px] border-b-[11.875px] border-l-transparent border-r-transparent border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default TriangleShape;
