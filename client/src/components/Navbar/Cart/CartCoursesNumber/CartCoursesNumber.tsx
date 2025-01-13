const CartCoursesNumber = ({ countOfCourses = 1, isShowen = false }) => {
  return (
    <div
      className={`${
        isShowen ? "block" : "hidden"
      } bg-purple-500 rounded-full p-[0.2em] text-white absolute top-[1em] right-[9.3%] w-[2em]`}
    >
      {countOfCourses}
    </div>
  );
};

export default CartCoursesNumber;
