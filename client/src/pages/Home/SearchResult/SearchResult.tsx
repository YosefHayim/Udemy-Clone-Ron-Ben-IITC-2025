import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import ButtonsCarousel from "@/components/ButtonsCarousel/ButtonsCarousel";
import HomeCourseCard from "@/components/HomeCourseCard/HomeCourseCard";
import Loader from "@/components/Loader/Loader";
import { filterContext } from "@/Contexts/filterSearch";

const SearchResult: React.FC<{ title: string; randomAlgoWord: string }> = ({
  title,
  randomAlgoWord,
}) => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [isCourseAnimating, setCourseAnimating] = useState(false);
  const [countCourseClick, setCourseClick] = useState(0);

  const { filterData, setSortBy } = useContext(filterContext);

  const { data, isLoading } = useQuery({
    queryKey: [randomAlgoWord],
    queryFn: () => getAllCourses(randomAlgoWord, filterData),
    enabled: !!randomAlgoWord,
  });

  const handlePrevCourse = () => {
    if (isCourseAnimating || courseIndex === 0) return;
    setCourseAnimating(true);
    setCourseClick((prev) => prev - 1);
    setCourseIndex((prev) => prev - 1);
    setTimeout(() => setCourseAnimating(false), 500);
  };

  const handleNextCourse = () => {
    if (isCourseAnimating) return;
    setCourseAnimating(true);
    setCourseClick((prev) => prev + 1);
    setCourseIndex((prev) => prev + 1);
    setTimeout(() => setCourseAnimating(false), 500);
  };

  return (
    <section className="py-8">
      {randomAlgoWord && title && (
        <h2 className="mb-6 font-sans text-3xl font-extrabold">
          Because you searched for “
          <Link
            className="cursor-pointer font-sans font-extrabold text-purple-600 underline hover:text-purple-800"
            to={`/courses/search?q=${randomAlgoWord}&page=1&limit=20`}
          >
            {randomAlgoWord}
          </Link>
          ”
        </h2>
      )}
      {title && !randomAlgoWord && (
        <h2 className="mb-6 font-sans text-3xl font-extrabold">{title}</h2>
      )}

      <div className="relative w-full">
        {data?.response && data?.response?.length > 7 && (
          <ButtonsCarousel
            handleFnNext={handleNextCourse}
            handleFnPrev={handlePrevCourse}
            state={countCourseClick}
            useCustom={true}
            showDirectionalButtonsOnlyOnEdge={false}
            topPosition="40%"
            leftPosition="-1.5%"
            rightPosition="2%"
          />
        )}
        <div className="overflow-x-clip">
          <div
            className={`flex
            ${
              data?.response && data.response?.length > 7
                ? "w-max items-center justify-center"
                : "w-full items-center justify-start"
            } z-20 h-full gap-5 transition-transform duration-1000 ease-in-out`}
            style={{ transform: `translateX(-${courseIndex * 30}%)` }}
          >
            {data?.response && data?.response ? (
              data?.response?.map((courseCard, index: number) => (
                <HomeCourseCard
                  key={courseCard._id || index}
                  courseCard={courseCard}
                  index={index}
                />
              ))
            ) : (
              <div className="w-full">
                <Loader useSmallLoading={false} hSize="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
