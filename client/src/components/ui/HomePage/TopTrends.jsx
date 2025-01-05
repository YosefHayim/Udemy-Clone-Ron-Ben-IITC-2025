import React from "react";
import trendsReportImage from "../../../assets/images"; 

const TrendsReport = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 bg-white">
      {/* Texto à esquerda */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-3xl font-bold text-gray-900">
          Top trends for the future of work
        </h2>
        <p className="mt-4 text-gray-600 text-base">
          Our 2025 Global Learning & Skills Trends Report is out now! Find out
          how to build the skills to keep pace with change.
        </p>
        <button className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition duration-200">
          Get the report →
        </button>
      </div>

      {/* Imagem à direita */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src={trendsReportImage}
          alt="2025 Global Learning & Skills Trends Report"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default TrendsReport;
