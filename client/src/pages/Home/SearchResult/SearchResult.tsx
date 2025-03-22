import { Link } from "react-router-dom";
import jsCourse1 from "/images/js1.jpg";
import jsCourse2 from "/images/js2.jpg";
import jsCourse3 from "/images/js3.jpg";
import jsCourse4 from "/images/js4.jpg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import ButtonsCarousel from "@/components/ButtonsCarousel/ButtonsCarousel";
import { CourseTypeProps } from "@/types/types";
import HomeCourseCard from "@/components/HomeCourseCard/HomeCourseCard";
import Loader from "@/components/Loader/Loader";

const courses = [
  {
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviews: 217830,
    price: "₪79.90",
    oldPrice: "₪619.90",
    bestSeller: true,
    image: jsCourse1,
  },
  {
    title: "Complete JAVASCRIPT with HTML5, CSS3 from zero to Expert",
    instructor: "Hemanth Kumar",
    rating: 4.3,
    reviews: 5377,
    price: "₪39.90",
    oldPrice: "₪179.90",
    bestSeller: false,
    image: jsCourse2,
  },
  {
    title: "JavaScript for Beginners - The Complete introduction to JS",
    instructor: "Yassin Marco MBA",
    rating: 4.6,
    reviews: 2541,
    price: "₪39.90",
    oldPrice: "₪79.90",
    bestSeller: false,
    image: jsCourse3,
  },
  {
    title: "JavaScript: Understanding the Weird Parts (2024 Edition)",
    instructor: "Anthony Alicea",
    rating: 4.8,
    reviews: 48598,
    price: "₪49.90",
    oldPrice: "₪369.90",
    bestSeller: false,
    image: jsCourse4,
  },
];

const SearchResult = () => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [isCourseAnimating, setCourseAnimating] = useState(false);
  const [countCourseClick, setCourseClick] = useState(0);
  const convertArrayStringToRegArray = JSON.parse(
    localStorage.getItem("searchesOfUser"),
  );
  const [arrayAlgo, setArrayAlgo] = useState(convertArrayStringToRegArray);

  const randomAlgoWord =
    arrayAlgo[Math.floor(Math.random() * arrayAlgo.length)];

  const { data } = useQuery({
    queryKey: ["algoCourseSearch", randomAlgoWord],
    queryFn: () => getAllCourses(randomAlgoWord),
    enabled: !!randomAlgoWord,
  });

  const handlePrevCourse = () => {
    if (isCourseAnimating || courseIndex === 0) return;
    setCourseAnimating(true);
    setCourseClick((prevCount) => prevCount - 1);
    setCourseIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setCourseAnimating(false), 500);
  };

  const handleNextCourse = () => {
    if (isCourseAnimating) return;
    setCourseClick((prevCount) => prevCount + 1);
    setCourseAnimating(true);
    setCourseIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setCourseAnimating(false), 500);
  };

  return (
    <section className="px-6 py-8">
      <h2 className="mb-6 text-3xl font-extrabold">
        Because you searched for “
        <Link
          className="cursor-pointer font-extrabold text-purple-600 underline hover:text-purple-800"
          to={``}
        >
          {randomAlgoWord}
        </Link>
        ”
      </h2>
      <div className="relative w-full overflow-hidden">
        {data && data.length > 7 && (
          <ButtonsCarousel
            handleFnNext={handleNextCourse}
            handleFnPrev={handlePrevCourse}
            state={countCourseClick}
            useCustom={true}
            showDirectionalButtonsOnlyOnEdge={false}
            topPosition="40%"
            leftPosition="1%"
            rightPosition="2%"
          />
        )}
        <div
          className={`flex ${data && data.length > 7 ? "w-max items-center justify-center" : "w-full items-center justify-start"}  z-20 h-full gap-4 transition-transform duration-1000 ease-in-out`}
          style={{
            transform: `translateX(-${courseIndex * 30.5}%)`,
          }}
        >
          {data && data.length > 1 ? (
            data.map((courseCard: CourseTypeProps, index: number) => (
              <HomeCourseCard courseCard={courseCard} index={index} />
            ))
          ) : (
            <div className="w-full">
              <Loader useSmallLoading={false} hSize="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
