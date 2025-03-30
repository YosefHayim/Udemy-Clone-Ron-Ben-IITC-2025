import { useQuery } from "@tanstack/react-query";
import FrequentlyCourseCard from "./FaqCourseCard/FaqCourseCard";
import FaqTotalCoursesPrice from "./FaqTotalCoursesPrice/FaqTotalCoursesPrice";
import getThreeCoursesOfInstructor from "@/api/courses/getThreeCoursesOfInstructor";
import { useState } from "react";
import { useEffect } from "react";
import { Course } from "@/types/types";
import { AiOutlinePlus } from "react-icons/ai";

const FrequentlyBoughtTogether: React.FC<{
  instructorId: string;
  showPlusButtons: boolean;
  amountOfCourses: number;
  setCoursesAdded: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({ instructorId, showPlusButtons, amountOfCourses, setCoursesAdded }) => {
  const [sum, setSumFullPrice] = useState(0);
  const [discountSum, setDiscountSum] = useState(0);
  const [displayFBT, setDisplayFBT] = useState(amountOfCourses);

  if (!instructorId) return;

  const { data } = useQuery({
    queryKey: ["instructorThreeCourse"],
    queryFn: () => getThreeCoursesOfInstructor(instructorId),
    enabled: !!instructorId,
  });

  useEffect(() => {
    if (data) {
      // Calculate total full price
      const fullPriceTotal = data?.reduce(
        (accumulator: number, course: Course) => accumulator + course?.courseFullPrice,
        0
      );
      setSumFullPrice(fullPriceTotal);

      // Calculate total discount price
      const discountPriceTotal = data?.reduce(
        (accumulator: number, course: Course) => accumulator + course?.courseDiscountPrice,
        0
      );
      setDiscountSum(discountPriceTotal);
    }
  }, [data]);

  if (!data || data.length <= 1) return null;

  return (
    <div className="w-full">
      {displayFBT > 0 && (
        <div className="flex w-full flex-col bg-white p-[1em]">
          <h2 className="font-sans font-extrabold">Frequently Bought Together</h2>
          {data &&
            data.slice(0, amountOfCourses).map((course: Course, index: number) => (
              <div key={course?._id} className="w-full">
                <FrequentlyCourseCard
                  setCoursesAdded={setCoursesAdded}
                  setDisplayFBT={setDisplayFBT}
                  courseId={course?._id}
                  courseImg={course?.courseImg}
                  courseName={course?.courseName}
                  instructorName={course?.courseInstructor.fullName}
                  courseFullPrice={course?.courseFullPrice}
                  courseDiscountPrice={course?.courseDiscountPrice}
                  totalRatings={course?.totalRatings}
                />
                {((index === 1 && showPlusButtons) || (index === 2 && showPlusButtons)) && (
                  <AiOutlinePlus
                    size={35}
                    style={{
                      background: "white",
                    }}
                    className="absolute left-[50%] right-2 top-[-17.5%] rounded-[100em] p-[0.4em] text-xl shadow-alertAlgoInfo"
                  />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FrequentlyBoughtTogether;
