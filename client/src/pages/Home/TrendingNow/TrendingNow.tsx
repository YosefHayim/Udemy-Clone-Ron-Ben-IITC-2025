import { Link } from "react-router-dom";

const TrendingNow = () => {
  return (
    <div className="bg-white px-12 py-16">
      <h2 className="text-4xl font-bold text-gray-900 leading-tight">
        Trending Now
      </h2>
      <div className="mt-6 border-t border-gray-300 pt-6 flex flex-col lg:flex-row justify-between">
        {/* Coluna 1 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="text-xl font-bold text-gray-900">
            ChatGPT is a top skill
          </h3>
          <Link
            to="/chatgpt-courses"
            className="text-purple-600 hover:underline text-lg block mt-2"
          >
            See ChatGPT courses →
          </Link>
          <p className="text-gray-600 text-sm mt-1">3,957,244 learners</p>
          <button className="focus:outline-none mt-6 px-6 py-3 border border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition duration-200 flex items-center space-x-2">
            Show all trending skills
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Coluna 2 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Development</h3>
          <div className="space-y-3">
            <Link
              to="/courses/python"
              className="text-purple-600 hover:underline"
            >
              Python →
            </Link>
            <p className="text-gray-600 text-sm">46,814,772 learners</p>

            <Link
              to="/courses/web-development"
              className="text-purple-600 hover:underline"
            >
              Web Development →
            </Link>
            <p className="text-gray-600 text-sm">13,826,607 learners</p>

            <Link
              to="/courses/data-science"
              className="text-purple-600 hover:underline"
            >
              Data Science →
            </Link>
            <p className="text-gray-600 text-sm">7,612,352 learners</p>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Design</h3>
          <div className="space-y-3">
            <Link
              to="/courses/blender"
              className="text-purple-600 hover:underline"
            >
              Blender →
            </Link>
            <p className="text-gray-600 text-sm">2,833,276 learners</p>

            <Link
              to="/courses/graphic-design"
              className="text-purple-600 hover:underline"
            >
              Graphic Design →
            </Link>
            <p className="text-gray-600 text-sm">4,426,658 learners</p>

            <Link
              to="/courses/adobe-photoshop"
              className="text-purple-600 hover:underline"
            >
              Adobe Photoshop →
            </Link>
            <p className="text-gray-600 text-sm">12,570,400 learners</p>
          </div>
        </div>

        {/* Coluna 4 */}
        <div className="lg:w-1/4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Business</h3>
          <div className="space-y-3">
            <Link
              to="/courses/pmp-certification"
              className="text-purple-600 hover:underline"
            >
              PMI Project Management Professional (PMP) →
            </Link>
            <p className="text-gray-600 text-sm">2,464,690 learners</p>

            <Link
              to="/courses/microsoft-power-bi"
              className="text-purple-600 hover:underline"
            >
              Microsoft Power BI →
            </Link>
            <p className="text-gray-600 text-sm">4,455,426 learners</p>

            <Link
              to="/courses/project-management"
              className="text-purple-600 hover:underline"
            >
              Project Management →
            </Link>
            <p className="text-gray-600 text-sm">3,822,469 learners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
