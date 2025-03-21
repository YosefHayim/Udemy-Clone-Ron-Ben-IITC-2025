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
    <div className="flex w-full flex-col items-start justify-start">
      <div className="flex w-full flex-col items-start justify-start  px-5">
        <h1 className="mt-12 w-full text-3xl font-bold text-gray-900">
          All the skills you need in one place
        </h1>
        <p className="mb-6 mt-2 w-full text-base text-gray-600">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
        <div className="flex w-full items-center justify-start gap-5 ">
          {navbarCategories.map((category, index) => (
            <div
              onClick={() => setNavbarCategory(category)}
              className="w-min-max cursor-pointer flex-col items-center justify-center text-base"
              key={index}
            >
              <b
                className={`${category === navbarCategory ? "text-black" : "text-gray-600"}`}
              >
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
      <div className="flex w-full flex-col items-center justify-center gap-10 bg-gray-100 p-5">
        <div className="flex w-full">
          <div className="absolute left-[1%] top-[67%] z-10 rounded-full bg-white shadow-alertAlgoInfo">
            <button
              className={`${countClick > 0 ? "block" : "hidden"} rounded-full p-2 hover:bg-gray-200 focus:outline-none`}
              onClick={handlePrev}
            >
              <RiArrowLeftSLine size={24} />
            </button>
          </div>
          <div className="absolute right-[2%] top-[67%] z-10 rounded-full bg-white shadow-alertAlgoInfo">
            <button
              className={`${countClick === 0 ? "block" : "hidden"} rounded-full p-2 hover:bg-gray-200 focus:outline-none`}
              onClick={handleNext}
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
          <div className="mt-3 flex w-full">
            {categoriesData.map((category, i) => {
              const match = category?.subcategory.find(
                (sub) => sub?.title === navbarCategory,
              );
              if (!match) return null;
              return (
                <div
                  key={i}
                  className={`flex w-max items-center justify-center gap-2 transition-transform duration-1000 ease-in-out`}
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
                          ? "w-full bg-[#303141] text-white hover:bg-[#595c73]"
                          : ""
                      } flex w-max cursor-pointer flex-col items-start justify-start rounded-full bg-[#e9eaf2] p-5 text-blackUdemy hover:bg-grayUdemy`}
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
        <div className="my-8 w-full">
          <button
            className={`${btnStyleNHover} border border-purple-800 font-bold text-purple-800`}
          >
            Show all {navbarCategory} courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;
