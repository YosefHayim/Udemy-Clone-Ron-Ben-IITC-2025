// import React from "react";
import trendsReportImage from "/images/toptrends2.png";
const TrendsReport = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  px-12 bg-white">
      {/* Texto à esquerda */}
      <div className="lg:w-1/4 text-left">
        <h2 className="text-[33px]  font-bold text-gray-900 leading-tight font-serif">
          Top trends for the future of work
        </h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Our 2025 Global Learning & Skills Trends Report is out now! Find out
          how to build the skills to keep pace with change.
        </p>
        <button className="mt-8 px-6 py-3 border border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition duration-200">
          Get the report →
        </button>
      </div>

      {/* Imagem à direita */}
      <div className="lg:w-3/4 flex justify-center">
        <img
          src={trendsReportImage}
          alt="2025 Global Learning & Skills Trends Report"
          className="w-full max-w-16xl object-contain"
          style={{
            transform: "translateX(5%)", // Adiciona um leve deslocamento à direita para simular o espaçamento
          }}
        />
      </div>
    </div>
  );
};

export default TrendsReport;
