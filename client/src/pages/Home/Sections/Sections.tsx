import { btnStyleNHover } from "@/utils/stylesStorage";
import { useContext, useEffect, useState } from "react";
import { categoriesData } from "@/utils/categoriesData";
import { navbarCategories } from "@/utils/navbarCategories";
import { getRandomLearnersAmount } from "@/utils/randomLearnersAmount";
import { topics } from "@/utils/topics";
import ButtonsCarousel from "@/components/ButtonsCarousel/ButtonsCarousel";
import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import { useNavigate } from "react-router-dom";
import { searchAlgoLocalStorage } from "@/utils/searchesOfUser";
import HomeCourseCard from "@/components/HomeCourseCard/HomeCourseCard";
import { filterContext } from "@/contexts/filterSearch";

const Sections = () => {
  const navigate = useNavigate();
  const { filterData, setSortBy } = useContext(filterContext);
  const [navbarCategory, setNavbarCategory] = useState("Data Science");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCourseAnimating, setCourseAnimating] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [countCourseClick, setCourseClick] = useState(0);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCountClick((prevCount) => prevCount - 1);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCountClick((prevCount) => prevCount + 1);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

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

  const handleNavigation = () => {
    navigate(`/courses/search?src=ukw&q=${encodeURIComponent(navbarCategory)}`);
    searchAlgoLocalStorage(navbarCategory);
  };

  const getDefaultTopic = () => {
    for (let category of categoriesData) {
      const match = category?.subcategory?.find((sub) => {
        return sub?.title === navbarCategory || sub?.name === navbarCategory;
      });
      if (match) {
        return match?.topics?.[0] || null;
      }
    }
    return null;
  };

  const [choseTopic, setChooseTopic] = useState(getDefaultTopic());

  const { data } = useQuery({
    queryKey: [`Sections`, choseTopic],
    queryFn: () => getAllCourses(choseTopic, filterData),
    enabled: !!choseTopic,
  });

  useEffect(() => {
    setSortBy("most-relevant");
  }, [data]);

  useEffect(() => {
    const newDefault = getDefaultTopic();
    if (newDefault) setChooseTopic(newDefault);
  }, [navbarCategory]);

  return (
    <div className="flex w-full flex-col items-center justify-center">

      {/* title and menu */}
      <div className="flex w-full flex-col items-center justify-center pt-5 px-5">
        <h1 className="mt-12 w-full font-[Armin Grotesk] text-[2rem] font-extrabold text-gray-900 flex justify-start ml-[12rem]">
          All the skills you need in one place
        </h1>
        <p className="mb-6 mt-2 w-full text-[1.2rem] font-[Armin Grotesk] text-gray-600 flex justify-start ml-[12rem]">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
        <div className="flex w-full items-center justify-start pt-5 gap-5 ml-[12rem]">
          {navbarCategories?.map((category, index) => (
            <div
              onClick={() => setNavbarCategory(category)}
              className="w-min-max cursor-pointer flex-col items-center justify-center text-base"
              key={index + 1}
            >
              <b className={`${category === navbarCategory ? "text-black" : "text-gray-600"}`}>
                {category}
              </b>
              <hr
                className={`${category === navbarCategory ? "w-min-max h-[0.1em] bg-black" : "hidden"}`}
              />
            </div>
          ))}
        </div>
        <hr className="w-full" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-1 p-5 bg-gray-100">

        {/* Circle Categories*/}
        <div className="flex w-full max-w-[calc(100%-11.5rem)] overflow-clip">
          <ButtonsCarousel
            handleFnNext={handleNext}
            handleFnPrev={handlePrev}
            state={countClick}
            useCustom={true}
            showDirectionalButtonsOnlyOnEdge={true}
            topPosition="100%"
            leftPosition="5.2%"
            rightPosition="5.7%"
          />
          <div className="mt-3 flex w-auto">
            {categoriesData?.map((category, i) => {
              const match = category?.subcategory.find((sub) => sub?.title === navbarCategory);
              if (!match) return null;
              return (
                <div
                  key={i + 2}
                  className={`flex w-full items-center justify-center gap-2 transition-transform duration-1000`}
                  style={{
                    transform: `translateX(-${currentIndex * 8}%)`,
                  }}
                >
                  {match?.topics?.map((topic, idx) => (
                    <div
                      key={idx}
                      onClick={() => setChooseTopic(topic)}
                      className={`${choseTopic === topic
                        ? "w-full bg-blackUdemy text-white hover:bg-grayUdemyHover"
                        : ""
                        } flex w-max cursor-pointer flex-col items-start justify-start rounded-full bg-[#e9eaf2] p-5 text-blackUdemy hover:bg-grayUdemy`}
                    >
                      <b className="w-max text-base">{topic}</b>
                      {idx < topics.length - 1 ? <p>{getRandomLearnersAmount()}</p> : null}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* carrousel courses */}
        <div className="relative w-full overflow-visible ml-[11.5rem]">
          {data?.response && data?.response?.length > 7 && (
            <ButtonsCarousel
              handleFnNext={handleNextCourse}
              handleFnPrev={handlePrevCourse}
              state={countCourseClick}
              useCustom={true}
              showDirectionalButtonsOnlyOnEdge={false}
              topPosition="41%"
              leftPosition="-1.5%"
              rightPosition="10.7%"
            />
          )}
          <div
            className="flex w-full items-center justify-start gap-4 py-4 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${courseIndex * 100}%)` }}
          >

            {[...Array(Math.ceil((data?.response?.length || 0) / 4))].map((_, groupIndex) => {
              const coursesGroup = data?.response?.slice(groupIndex * 4, groupIndex * 4 + 4);

              return (
                <div key={groupIndex} className="flex min-w-full flex-shrink-0 gap-4">

                  {coursesGroup.map((courseCard, i) => (
                    <HomeCourseCard
                      courseCard={courseCard}
                      index={courseCard._id}
                      key={courseCard._id}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-2 w-full ml-[11.5rem]">
          <button
            onClick={handleNavigation}
            className={`${btnStyleNHover} border border-purple-800 font-sans text-[0.875rem] font-bold text-purple-800`}
          >
            View all {navbarCategory} courses
          </button>
        </div>
      </div>

    </div>
  );
};

export default Sections;
