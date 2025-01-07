import React from "react";
import course from "../../../db"; // Importing the course data from '../db'
import { FaStar } from "react-icons/fa";


const OverviewTab: React.FC = () => {
  return (
    <div id="overview" className="p-20 pt-5">
      <h2 className="text-xl  mb-4">{course.description}</h2>
      <div className="flex items-start gap-5 text-sm font-bold border-t border-b py-4">
        <div className="flex-col">
        <div className="flex-row">
          <span className="text-[#4d3105] text-s font-bold mr-2">
            {course.averageRating.toFixed(1)}
            </span>
          <span className="text-[#b4690e] text-s  font-bold">
            <FaStar />
          </span>
          </div>
          <span className="text-gray-600 a">{course.totalRatings} ratings</span>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">{course.totalStudentsEnrolled.count.toLocaleString()}</span>
          <span className="text-gray-600">Students</span>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">71.5</span>
          <span className="text-gray-600">hours</span>
        </div>
      </div>
      <div className="text-gray-500 mt-4">
        Last updated: {new Date(course.moneyBackGuarantee).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </div>
    </div>
  );
};

export default OverviewTab;
