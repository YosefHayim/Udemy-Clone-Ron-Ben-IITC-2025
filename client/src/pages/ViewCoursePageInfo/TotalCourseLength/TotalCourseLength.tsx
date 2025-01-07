const TotalCourseLength = () => {
  return (
    <div>
      <div className="flex w-[550px] justify-between mb-[0.5em]">
        <div className="flex flex-row gap-[0.5em]">
          <p>2 sections</p>
          <p>15 lectures</p>
          <p>2h 13m total length</p>
        </div>
        <button className="border-none font-bold text-[#5022c3]">
          Expand all sections
        </button>
      </div>
    </div>
  );
};

export default TotalCourseLength;
