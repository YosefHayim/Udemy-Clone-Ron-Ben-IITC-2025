//
import trendsReportImage from "/images/toptrends2.png";
const TrendsReport = () => {
  return (
    <div className="lg: flex flex-col items-center  bg-white px-12">
      {/* Texto à esquerda */}
      <div className="text-left lg:w-1/4">
        <h2 className="font-sans  font-serif text-[33px] font-extrabold leading-tight text-gray-900">
          Top trends for the future of work
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the
          skills to keep pace with change.
        </p>
        <button className="mt-8 rounded-lg border border-gray-900 px-6 py-3 font-sans font-extrabold text-gray-900 transition duration-200 hover:bg-gray-100 focus:outline-none">
          Get the report →
        </button>
      </div>

      {/* Imagem à direita */}
      <div className="flex justify-center lg:w-3/4">
        <img
          src={trendsReportImage}
          alt="2025 Global Learning & Skills Trends Report"
          className="max-w-16xl w-full object-contain"
          style={{
            transform: "translateX(5%)", // Adiciona um leve deslocamento à direita para simular o espaçamento
          }}
        />
      </div>
    </div>
  );
};

export default TrendsReport;
