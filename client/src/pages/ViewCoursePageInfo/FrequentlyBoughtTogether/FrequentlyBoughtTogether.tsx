import { useQuery } from "@tanstack/react-query";
import FrequentlyCourseCard from "./FaqCourseCard/FaqCourseCard";
import FaqTotalCoursesPrice from "./FaqTotalCoursesPrice/FaqTotalCoursesPrice";
import getThreeCoursesOfInstructor from "@/api/courses/getThreeCoursesOfInstructor";
import { useState } from "react";
import { useEffect } from "react";
import { Course } from "@/types/types";
import { AiOutlinePlus } from "react-icons/ai";

const FrequentlyBoughtTogether: React.FC<{ instructorId: string }> = ({
  instructorId,
}) => {
  const [sum, setSumFullPrice] = useState(0);
  const [discountSum, setDiscountSum] = useState(0);

  const { data } = useQuery({
    queryKey: ["instructorThreeCourse"],
    queryFn: () => getThreeCoursesOfInstructor(instructorId),
  });

  useEffect(() => {
    if (data) {
      // Calculate total full price
      const fullPriceTotal = data.reduce(
        (accumulator: number, course: Course) =>
          accumulator + course?.courseFullPrice,
        0
      );
      setSumFullPrice(fullPriceTotal);

      // Calculate total discount price
      const discountPriceTotal = data.reduce(
        (accumulator: number, course: Course) =>
          accumulator + course?.courseDiscountPrice,
        0
      );
      setDiscountSum(discountPriceTotal);
    }
  }, [data]);

  if (!instructorId) {
    return undefined;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col border border-[#d1d7dc] w-full p-[1em]">
        <h2 className="font-bold">Frequently Bought Together</h2>
        {data?.map((course: Course, index: number) => (
          <div key={course?._id} className="relative w-full">
            <FrequentlyCourseCard
              courseId={course?._id}
              courseImg={course?.courseImg}
              courseName={course?.courseName}
              instructorName={course?.courseInstructor.fullName}
              courseFullPrice={course?.courseFullPrice}
              courseDiscountPrice={course?.courseDiscountPrice}
              totalRatings={course?.totalRatings}
            />
            {(index === 1 || index === 2) && (
              <AiOutlinePlus
                size={35}
                style={{
                  background: "white",
                }}
                className="p-[0.4em] absolute top-[-17.5%] left-[50%] right-2 text-xl shadow-alertAlgoInfo rounded-[100em]"
              />
            )}
          </div>
        ))}
        <FaqTotalCoursesPrice
          sum={sum}
          discountSum={discountSum}
          courseIds={data}
        />
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
