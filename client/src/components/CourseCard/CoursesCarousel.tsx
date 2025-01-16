import React, { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard/CourseCard";
import { CourseProps } from "@/types/types";

const CoursesCarousel: React.FC = () => {
  const [courses, setCourses] = useState<CourseProps[]>([]); // State to store courses
  const [currentIndex, setCurrentIndex] = useState(0); // Current index in the carousel
  const visibleItems = 5; // Number of visible courses in the carousel

  // Function to fetch courses from the backend
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://udemy-clone-ron-ben.onrender.com/api/course"
      ); // Backend API URL
      const data = await response.json();
      if (data.status === "Success") {
        setCourses(data.response); // Update state with fetched courses
      } else {
        console.error("Error fetching courses:", data);
      }
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  // useEffect to fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  // Function to handle navigation in the carousel
  const handleNext = () => {
    const nextIndex = currentIndex + visibleItems;
    if (nextIndex < courses.length) {
      setCurrentIndex(nextIndex); // Move to the next set of courses
    } else {
      setCurrentIndex(0); // Reset to the beginning if there are no more courses
    }
  };

  return (
    <div className="py-8 relative">
      <div className="flex items-center">
        {/* Carousel container */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
              width: `${(courses.length * 100) / visibleItems}%`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-[20%] px-2 box-border" // Ensures each course takes 20% of the total width
              >
                {/* Passing course data to the CourseCard component */}
                <CourseCard
                  title={course.courseName}
                  image={course.courseImg}
                  description={course.courseDescription}
                  fullPrice={course.courseFullPrice}
                  discountPrice={course.courseDiscountPrice}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button to scroll to the next set of courses */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default CoursesCarousel;
