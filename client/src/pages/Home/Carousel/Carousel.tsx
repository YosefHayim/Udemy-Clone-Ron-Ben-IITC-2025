import { useState } from "react";
import carrosela1 from "/images/carrosela1.png";
import carrosela2 from "/images/carrosela2.webp";
import carrosela3 from "/images/carossela3.webp";
import carrosela4 from "/images/carrosela4.webp";
import carrosela_logo1 from "/images/carossela_logo1.svg";
import carrosela_logo2 from "/images/carrosela_logo2.svg";
import carrosela_logo3 from "/images/carrosela_logo3.svg";
import carrosela_logo4 from "/images/carrosela_logo4.svg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { loginWithEmailBtn } from "@/utils/stylesStorage";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      logo: carrosela_logo1, // Adicionando a imagem como string
      title:
        "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
      stats: [
        {
          percentage: "93%",
          text: "retention rate among participating employees",
        },
        {
          percentage: "65%",
          text: "of learners noted a positive impact on their productivity",
        },
      ],
      buttonText: "Read full story",
      image: carrosela1,
    },
    {
      id: 2,
      logo: carrosela_logo2,
      title:
        "Capital One Accelerates Transformational Learning through Udemy Business",
      stats: [
        {
          percentage: "95%",
          text: "of learners rated Udemy as 'very helpful' to their success",
        },
        {
          percentage: "65%",
          text: "increase in retention for in-demand tech roles",
        },
      ],
      buttonText: "Read full story",
      image: carrosela2,
    },
    {
      id: 3,
      logo: carrosela_logo3,
      title:
        "Eventbrite Navigates Change Through Skill-Building and Leadership Development",
      stats: [
        {
          percentage: "4,800+",
          text: "increase in employee enrollments for professional development courses",
        },
        {
          percentage: "65%",
          text: "revenue growth supported by a business model backed by learning",
        },
      ],
      buttonText: "Read full story",
      image: carrosela3,
    },
    {
      id: 4,
      logo: carrosela_logo4,
      title:
        "Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes",
      stats: [
        { percentage: "50%", text: "training cost reduction per person" },
        { percentage: "+7,000", text: "hours of upskilling" },
      ],
      buttonText: "Read full story",
      image: carrosela4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex items-start justify-between">
      <div className="text-left">
        {slides[currentSlide].logo && (
          <img
            src={slides[currentSlide].logo}
            alt="Logo"
            className="mb-4 h-auto w-32"
          />
        )}
        <h2 className="my-4 font-sans text-3xl font-extrabold text-gray-800">
          {slides[currentSlide].title}
        </h2>
        <div className="my-4 flex space-x-12">
          {slides[currentSlide].stats.map((stat, index) => (
            <div key={index}>
              <p className="font-sans text-4xl font-extrabold text-gray-900">
                {stat.percentage}
              </p>
              <p className="text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>
        <button className={`${loginWithEmailBtn} h-[30px] max-w-max px-2 py-0`}>
          {slides[currentSlide].buttonText}
        </button>
      </div>

      <div className="relative">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="relative w-full"
          style={{ height: "400px", width: "600px" }}
        />
      </div>

      <div className="absolute bottom-4 left-4 flex items-center space-x-4">
        <button
          className="z-10 h-min rounded-full p-2 shadow-alertAlgoInfo hover:bg-gray-200 focus:outline-none"
          onClick={prevSlide}
        >
          <RiArrowLeftSLine size={30} />
        </button>
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                currentSlide === index ? "w-6 bg-purple-600" : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          className="z-10 h-min rounded-full p-2 shadow-alertAlgoInfo hover:bg-gray-200 focus:outline-none"
          onClick={nextSlide}
        >
          <RiArrowRightSLine size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
