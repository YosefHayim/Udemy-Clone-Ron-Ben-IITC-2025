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
import { FilterContext } from "@/Contexts/FilterSearch";
import CourseHoverCardInfo from "@/pages/Search/CourseHoverCardInfo/CourseHoverCardInfo";

const Sections = () => {
  const navigate = useNavigate();
  const { filterData, setSortBy } = useContext(FilterContext);
  const [navbarCategory, setNavbarCategory] = useState("Data Science");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCourseAnimating, setCourseAnimating] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [countCourseClick, setCourseClick] = useState(0);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

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
      <div className="flex w-full flex-col items-center justify-center px-5 pt-5">
        <h1 className="font-[Armin Grotesk] ml-[12rem] mt-12 flex w-full justify-start text-[2rem] font-extrabold text-gray-900">
          All the skills you need in one place
        </h1>
        <p className="font-[Armin Grotesk] mb-6 ml-[12rem] mt-2 flex w-full justify-start text-[1.2rem] text-gray-600">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
        <div className="ml-[12rem] flex w-full items-center justify-start gap-5 pt-5">
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

      <div className="flex w-full flex-col items-center justify-center gap-1 bg-gray-100 p-5">
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
                      className={`${
                        choseTopic === topic
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
        <div className="relative ml-[11.5rem] w-full overflow-visible">
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
                    // <HomeCourseCard
                    //   courseCard={courseCard}
                    //   index={courseCard._id}
                    //   key={courseCard._id}
                    // />
                    <HomeCourseCard
                      key={courseCard._id}
                      courseCard={courseCard}
                      index={courseCard._id}
                      onHover={setHoveredCourse}
                      onPosition={setHoverPosition}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* hoveredCourse */}
        {hoveredCourse && (
          <div
            className="absolute z-[1000]"
            style={{
              top: `${hoverPosition.top - hoverPosition.top / 20}px`,
              left: `${hoverPosition.left}px`,
            }}
          >
            <CourseHoverCardInfo
              courseName={hoveredCourse?.courseName}
              courseLanguages={hoveredCourse?.courseLanguages}
              courseTag={hoveredCourse?.courseTag}
              showCourseLength={true}
              totalCourseLessons={hoveredCourse?.totalCourseLessons}
              totalCourseDuration={hoveredCourse?.totalCourseDuration}
              courseLevel={hoveredCourse?.courseLevel}
              courseUpdatedAt={hoveredCourse?.updatedAt}
              courseRecapInfo={hoveredCourse?.courseRecapInfo}
              positionedRight={true}
              width="330px"
              instructorId={hoveredCourse?.courseInstructor?._id}
              courseTopic={hoveredCourse?.courseTopic}
              index={hoveredCourse?._id}
              displayWhatYouLearn={false}
              whatYouWillLearn={hoveredCourse?.whatYouWillLearn}
              courseId={hoveredCourse?._id}
              fullPriceCourse={hoveredCourse?.courseFullPrice}
              coursePrice={hoveredCourse?.courseDiscountPrice}
            />
          </div>
        )}

        <div className="my-2 ml-[11.5rem] w-full">
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
