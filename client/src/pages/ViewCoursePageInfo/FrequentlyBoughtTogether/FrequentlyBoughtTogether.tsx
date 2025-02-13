import { useQuery } from "@tanstack/react-query";
import FrequentlyCourseCard from "./FaqCourseCard/FaqCourseCard";
import FaqTotalCoursesPrice from "./FaqTotalCoursesPrice/FaqTotalCoursesPrice";
import getThreeCoursesOfInstructor from "@/api/courses/getThreeCoursesOfInstructor";

const FrequentlyBoughtTogether: React.FC<{ instructorId: string }> = ({
  instructorId,
}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["instructorThreeCourse"],
    queryFn: () => getThreeCoursesOfInstructor(instructorId),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="flex flex-col border border-[#d1d7dc] w-[515px] p-[1em]">
        <h2 className="font-bold text-[1.5em]">Frequently Bought Together</h2>
        {data.map((course) => console.log(course))}
        <FrequentlyCourseCard />
        <FrequentlyCourseCard />
        <FrequentlyCourseCard />
        <FaqTotalCoursesPrice />
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
