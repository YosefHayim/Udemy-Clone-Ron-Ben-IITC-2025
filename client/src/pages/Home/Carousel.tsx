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
    <div className="relative flex flex-col lg:flex-row items-center px-8 py-12 bg-white">
      {/* Texto e estatísticas */}
      <div className="lg:w-1/2 text-left">
        {slides[currentSlide].logo && (
          <img
            src={slides[currentSlide].logo}
            alt="Logo"
            className="w-32 h-auto mb-4"
          />
        )}
        <h2 className="text-3xl font-bold text-gray-800 my-4">
          {slides[currentSlide].title}
        </h2>
        <div className="flex space-x-12 my-4">
          {slides[currentSlide].stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-gray-900">
                {stat.percentage}
              </p>
              <p className="text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>
        <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition duration-300">
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Imagem */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full max-w-2xl object-cover rounded-lg"
          style={{ height: "400px", width: "600px" }}
        />
      </div>

      {/* Controles e Indicadores */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition"
        >
          &lt;
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-purple-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
