import FrequentlyCourseCard from "./FaqCourseCard/FaqCourseCard";
import FaqPlusBtn from "./FaqPlusBtn/FaqPlusBtn";
import FaqTotalCoursesPrice from "./FaqTotalCoursesPrice/FaqTotalCoursesPrice";

const FrequentlyBoughtTogether = () => {
  return (
    <div>
      <div className="flex flex-col border border-[#d1d7dc] w-[515px] p-[1em]">
        <h2 className="font-bold text-[1.5em]">Frequently Bought Together</h2>
        <FrequentlyCourseCard />
        <FrequentlyCourseCard />
        <FrequentlyCourseCard />
        <FaqTotalCoursesPrice />
      </div>
      <div>{/* <FaqPlusBtn /> */}</div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
