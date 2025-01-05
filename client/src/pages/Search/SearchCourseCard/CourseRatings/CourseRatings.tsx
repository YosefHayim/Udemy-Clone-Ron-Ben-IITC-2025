const CourseRatings = ({ avgRatings, stars, totalRatings }) => {
  return (
    <div className="flex text-gray-500 text-[0.7em] items-center gap-[0.2em]">
      <b className="text-[1.2em] text-black">{avgRatings || "4.6"}</b>
      <p className="text-[1.2em] text-star">{stars || "★★★★☆"}</p>
      <p>{totalRatings || "(222,759)"}</p>
    </div>
  );
};

export default CourseRatings;
