import React, { useEffect, useState } from "react";
import { fetchCourseById } from "@/services/courseService";
import { FaStar } from "react-icons/fa";

const OverviewTab: React.FC = () => {
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseById("67800ee6c7d3d0bd68dceb66");
        setCourse(data.data);
      } catch (error) {
        console.error("Failed to fetch course data.");
      }
    };
    fetchData();
  }, []);

  const formatLastUpdatedDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div id="overview" className="p-20 pt-5">
      <h2 className="text-xl mb-4">{course.courseDescription}</h2>
      <div className="flex items-start gap-10 text-xl py-4">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-[#4d3105] text-xl font-bold mr-2">
              {course.averageRating.toFixed(1)}
            </span>
            <span className="text-[#b4690e] text-xl font-bold">
              <FaStar />
            </span>
          </div>
          <span className="text-gray-500 text-sm">{course.totalRatings} ratings</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold">
            {course.totalStudentsEnrolled.count.toLocaleString()}
          </span>
          <span className="text-gray-600 text-sm">Students</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold">71.5 hours</span>
          <span className="text-gray-600 text-sm">Total</span>
        </div>
      </div>
      <div className="text-gray-500 mt-4">
        Last updated: {formatLastUpdatedDate(course.moneyBackGuarantee)}
      </div>
    </div>
  );
};

export default OverviewTab;
