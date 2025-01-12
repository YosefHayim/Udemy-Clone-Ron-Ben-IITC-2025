import React, { useState } from "react";
import CourseCard from "@/components/CourseCard/CourseCard";

const CoursesCarousel: React.FC = () => {
  const courses = Array.from({ length: 20 }); // Placeholder for 20 courses
  const visibleItems = 5; // Number of visible courses
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum index before we reach the end
  const maxIndex = courses.length - visibleItems;

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative py-8">
      <div className="relative flex items-center">
        {/* Left Arrow Button */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-600 z-10"
          >
            &#9664;
          </button>
        )}

        {/* Carousel Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
              width: `${(courses.length * 100) / visibleItems}%`,
            }}
          >
            {courses.map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[20%] px-4 box-border" // Each course occupies 20%
              >
                <CourseCard />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        {currentIndex < maxIndex && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-600 z-10"
          >
            &#9654;
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursesCarousel;
