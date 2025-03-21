import { btnStyleNHover } from "@/utils/stylesStorage";
import divIMG1 from "/images/sectionIMG1.jpg";
import divIMG2 from "/images/sectionIMG2.jpg";
import divIMG3 from "/images/sectionIMG3.jpg";
import divIMG4 from "/images/sectionIMG4.jpg";
import { useEffect, useState } from "react";
import { categoriesData } from "@/utils/categoriesData";
import { navbarCategories } from "@/utils/navbarCategories";
import { getRandomLearnersAmount } from "@/utils/randomLearnersAmount";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { topics } from "@/utils/topics";

const courses = [
  {
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    reviews: 42512,
    price: "₪49.90",
    oldPrice: "₪369.90",
    bestSeller: true,
    image: divIMG1,
  },
  {
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructor: "Ing. Tomas Moravek",
    rating: 4.5,
    reviews: 1706,
    price: "₪39.90",
    oldPrice: "₪269.90",
    bestSeller: false,
    image: divIMG2,
  },
  {
    title: "ChatGPT & MidJourney & Gemini: Digital Marketing Assistants",
    instructor: "Anton Voroniuk",
    rating: 4.5,
    reviews: 446,
    price: "₪49.90",
    oldPrice: "₪199.90",
    bestSeller: false,
    image: divIMG3,
  },
  {
    title: "ChatGPT Master: Complete OpenAI ChatGPT Course",
    instructor: "Faisal Zamir",
    rating: 4.3,
    reviews: 413,
    price: "₪49.90",
    oldPrice: "₪89.90",
    bestSeller: false,
    image: divIMG4,
  },
];

const Sections = () => {
  const [navbarCategory, setNavbarCategory] = useState("Data Science");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countClick, setCountClick] = useState(0);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCountClick((prevCount) => prevCount - 1);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setCountClick((prevCount) => prevCount + 1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getDefaultTopic = () => {
    for (let category of categoriesData) {
      const match = category?.subcategory?.find((sub) => {
        sub?.title || sub?.name === navbarCategory;
      });
      if (match) {
        return match.topics?.[0] || null;
      }
    }
    return null;
  };

  const [clicked, setClicked] = useState(getDefaultTopic());

  useEffect(() => {
    const newDefault = getDefaultTopic();
    if (newDefault) setClicked(newDefault);
  }, [navbarCategory]);

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start  px-5">
        <h1 className="w-full mt-12 text-3xl font-bold text-gray-900">
          All the skills you need in one place
        </h1>
        <p className="w-full mt-2 mb-6 text-base text-gray-600">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
        <div className="w-full flex items-center justify-start gap-5 ">
          {navbarCategories.map((category, index) => (
            <div
              onClick={() => setNavbarCategory(category)}
              className="cursor-pointer w-min-max flex-col items-center justify-center text-base"
              key={index}
            >
              <b
                className={`${category === navbarCategory ? "text-black" : "text-gray-600"}`}
              >
                {category}
              </b>
              <hr
                className={`${category === navbarCategory ? "w-min-max bg-black h-[0.1em]" : "hidden"}`}
              />
            </div>
          ))}
        </div>
        <hr className="w-full" />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10 bg-gray-100 p-5">
        <div className="w-full flex">
          <div className="absolute shadow-alertAlgoInfo z-10 bg-white rounded-full left-[1%] top-[67%]">
            <button
              className={`${countClick > 0 ? "block" : "hidden"} focus:outline-none p-2 hover:bg-gray-200 rounded-full`}
              onClick={handlePrev}
            >
              <RiArrowLeftSLine size={24} />
            </button>
          </div>
          <div className="absolute shadow-alertAlgoInfo z-10 bg-white rounded-full right-[2%] top-[67%]">
            <button
              className={`${countClick === 0 ? "block" : "hidden"} focus:outline-none p-2 hover:bg-gray-200 rounded-full`}
              onClick={handleNext}
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
          <div className="mt-3 w-full flex">
            {categoriesData.map((category, i) => {
              const match = category?.subcategory.find(
                (sub) => sub?.title === navbarCategory,
              );
              if (!match) return null;
              return (
                <div
                  key={i}
                  className={`w-max flex gap-2 items-center justify-center transition-transform duration-1000 ease-in-out`}
                  style={{
                    transform: `translateX(-${currentIndex * 18}%)`,
                  }}
                >
                  {match?.topics?.map((topic, idx) => (
                    <div
                      key={idx}
                      onClick={() => setClicked(topic)}
                      className={`${
                        clicked === topic
                          ? "text-white bg-[#303141] hover:bg-[#595c73] w-full"
                          : ""
                      } cursor-pointer hover:bg-grayUdemy text-blackUdemy flex flex-col items-start justify-start bg-[#e9eaf2] p-5 rounded-full w-max`}
                    >
                      <b className="w-max text-base">{topic}</b>

                      {idx < topics.length - 1 ? (
                        <p>{getRandomLearnersAmount()}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border bg-white shadow-sm"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="truncate text-lg font-bold text-gray-900">
                  {course.title}
                </h3>
                <p className="truncate text-sm text-gray-600">
                  {course.instructor}
                </p>
                <div className="mt-2 flex items-center text-sm text-yellow-500">
                  <span>{course.rating}</span>
                  <span className="ml-1 text-gray-500">({course.reviews})</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-gray-900">
                      {course.price}
                    </span>
                    {course.oldPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {course.oldPrice}
                      </span>
                    )}
                  </div>
                  {course.bestSeller && (
                    <span className="rounded-full bg-yellow-200 px-2 py-1 text-sm text-yellow-800">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full my-8">
          <button
            className={`${btnStyleNHover} font-bold text-purple-800 border-purple-800 border`}
          >
            Show all {navbarCategory} courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;
