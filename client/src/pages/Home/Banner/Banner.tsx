import { useState } from "react";
import banner1 from "/images/banner1.png";
import banner2 from "/images/banner2.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const slides = [
  {
    title: "Make 2025 the year of your career",
    description:
      "The skills you need are on sale from ₪39.90. [Sale ends January 10]",
    button: null,
    img: banner1,
  },
  {
    title: "Certifications — the ultimate career move",
    description:
      "Prepare for certification exams in COMPTIA, AWS Cloud, and so much more — on sale now.",
    button: "Find courses",
    img: banner2,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out">
        <img
          src={slides[currentSlide].img}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-10 top-1/4 bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        onClick={handlePrev}
      >
        <MdKeyboardArrowLeft size={24} className="text-black" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        onClick={handleNext}
      >
        <MdKeyboardArrowRight size={24} className="text-black" />
      </button>
    </div>
  );
};

export default Banner;
