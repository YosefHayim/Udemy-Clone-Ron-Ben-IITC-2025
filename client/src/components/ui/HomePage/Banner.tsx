import React, { useState } from "react";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";

const slides = [
  {
    title: "Make 2025 the year of your career",
    description: "The skills you need are on sale from ₪39.90. [Sale ends January 10]",
    button: null,
    img: banner1,
  },
  {
    title: "Certifications — the ultimate career move",
    description: "Prepare for certification exams in COMPTIA, AWS Cloud, and so much more — on sale now.",
    button: "Find courses",
    img: banner2,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null); // Define a direção da animação

  const handlePrev = () => {
    setDirection("left"); // Novo slide vem da esquerda
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right"); // Novo slide vem da direita
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 flex">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrevious = direction === "left" && index === (currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
          const isNext = direction === "right" && index === (currentSlide === slides.length - 1 ? 0 : currentSlide + 1);

          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-700 ${
                isActive
                  ? "translate-x-0" // Slide atual no centro
                  : isPrevious
                  ? "translate-x-full" // Slide atual empurrado para a direita
                  : isNext
                  ? "translate-x-[-100%]" // Novo slide empurrado para a esquerda
                  : ""
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-10 top-1/4 bg-white p-6 rounded-lg shadow-lg max-w-lg">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-600 mt-4">{slide.description}</p>
                {slide.button && (
                  <button className="mt-4 px-6 py-2 bg-black text-white rounded font-bold hover:opacity-80">
                    {slide.button}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botão de Navegação Esquerda */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none z-10"
        onClick={handlePrev}
      >
        &#9664;
      </button>

      {/* Botão de Navegação Direita */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none z-10"
        onClick={handleNext}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Banner;
