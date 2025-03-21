import { useState } from "react";
import carrosela1 from "/images/carrosela1.png";
import carrosela2 from "/images/carrosela2.webp";
import carrosela3 from "/images/carossela3.webp";
import carrosela4 from "/images/carrosela4.webp";
import carrosela_logo1 from "/images/carossela_logo1.svg";
import carrosela_logo2 from "/images/carrosela_logo2.svg";
import carrosela_logo3 from "/images/carrosela_logo3.svg";
import carrosela_logo4 from "/images/carrosela_logo4.svg";

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
    <div className="relative flex flex-col items-center bg-white px-8 py-12 lg:flex-row">
      {/* Texto e estatísticas */}
      <div className="text-left lg:w-1/2">
        {slides[currentSlide].logo && (
          <img
            src={slides[currentSlide].logo}
            alt="Logo"
            className="mb-4 h-auto w-32"
          />
        )}
        <h2 className="my-4 text-3xl font-bold text-gray-800">
          {slides[currentSlide].title}
        </h2>
        <div className="my-4 flex space-x-12">
          {slides[currentSlide].stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-gray-900">
                {stat.percentage}
              </p>
              <p className="text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>
        <button className="rounded-lg bg-black px-6 py-3 font-bold text-white transition duration-300 hover:bg-gray-900 focus:outline-none">
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Imagem */}
      <div className="flex items-center justify-center lg:w-1/2">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full max-w-2xl rounded-lg object-cover"
          style={{ height: "400px", width: "600px" }}
        />
      </div>

      {/* Controles e Indicadores */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="rounded-full border border-gray-800 p-3 transition hover:bg-gray-800 hover:text-white"
        >
          &lt;
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-purple-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="rounded-full border border-gray-800 p-3 transition hover:bg-gray-800 hover:text-white"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
