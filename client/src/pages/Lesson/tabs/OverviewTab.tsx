import React from "react";
import course from "../../../db"; // Importing the course data
import { FaStar } from "react-icons/fa";

const OverviewTab: React.FC = () => {
  // Helper function to format the last updated date
  const formatLastUpdatedDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div id="overview" className="p-20 pt-5">
      {/* Course Description */}
      <h2 className="text-xl mb-4">{course.description}</h2>

      {/* Ratings, Students, and Total Hours */}
      <div className="flex items-start gap-10 text-xl py-4">
        {/* Ratings Section */}
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

        {/* Students Enrolled Section */}
        <div className="flex flex-col">
          <span className="text-xl font-bold">
            {course.totalStudentsEnrolled.count.toLocaleString()}
          </span>
          <span className="text-gray-600 text-sm">Students</span>
        </div>

        {/* Total Hours Section */}
        <div className="flex flex-col">
          <span className="text-xl font-bold">71.5 hours</span>
          <span className="text-gray-600 text-sm">Total</span>
        </div>
      </div>

      {/* Last Updated Section */}
      <div className="text-gray-500 mt-4">
        Last updated: {formatLastUpdatedDate(course.moneyBackGuarantee)}
      </div>
    </div>
  );
};

export default OverviewTab;
