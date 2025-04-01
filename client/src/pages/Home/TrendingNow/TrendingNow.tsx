import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";

const TrendingNow = () => {
  return (
    <div className="bg-gray-100 px-12 py-16">
      <h2 className="font-sans text-4xl font-extrabold leading-tight text-gray-900">
        Trending Now
      </h2>
      <div className="lg: mt-6 flex justify-between border-t border-gray-300 pt-6">
        {/* Coluna 1 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="font-sans text-xl font-extrabold text-gray-900">ChatGPT is a top skill</h3>
          <Link
            to="/chatgpt-courses"
            className="mt-2 block text-xl text-purple-600 hover:underline"
          >
            See ChatGPT courses →
          </Link>
          <p className="mt-1 text-xl text-gray-600">3,957,244 learners</p>
          <button className="mt-6 flex text-[1rem] items-center space-x-2 rounded-xl border border-gray-900 px-6 py-3 font-sans font-extrabold text-gray-900 transition duration-200 hover:bg-gray-100 focus:outline-none">
            Show all top skills
            <span className="text-xl px-2"><FaArrowTrendUp /></span>
          </button>
        </div>

        {/* Coluna 2 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="mb-4 font-sans text-xl font-extrabold text-gray-900">Development</h3>
          <div className="space-y-3">
            <Link to="/courses/python" className="text-purple-700 hover:underline text-lg font-bold">
              Python →
            </Link>
            <p className="text-xl text-gray-600">46,814,772 learners</p>

            <Link to="/courses/web-development" className="text-purple-700 hover:underline text-lg font-bold">
              Web Development →
            </Link>
            <p className="text-xl text-gray-600">13,826,607 learners</p>

            <Link to="/courses/data-science" className="text-purple-700 hover:underline text-lg font-bold">
              Data Science →
            </Link>
            <p className="text-xl text-gray-600">7,612,352 learners</p>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="mb-4 font-sans text-xl font-extrabold text-gray-900">Design</h3>
          <div className="space-y-3">
            <Link to="/courses/blender" className="text-purple-700 hover:underline text-lg font-bold">
              Blender →
            </Link>
            <p className="text-xl text-gray-600">2,833,276 learners</p>

            <Link to="/courses/graphic-design" className="text-purple-700 hover:underline text-lg font-bold">
              Graphic Design →
            </Link>
            <p className="text-xl text-gray-600">4,426,658 learners</p>

            <Link to="/courses/adobe-photoshop" className="text-purple-700 hover:underline text-lg font-bold">
              Adobe Photoshop →
            </Link>
            <p className="text-xl text-gray-600">12,570,400 learners</p>
          </div>
        </div>

        {/* Coluna 4 */}
        <div className="lg:w-1/4">
          <h3 className="mb-4 font-sans text-xl font-extrabold text-gray-900">Business</h3>
          <div className="space-y-3">
            <Link to="/courses/pmp-certification" className="text-purple-700 hover:underline text-lg font-bold">
              PMI Project Management Professional (PMP) →
            </Link>
            <p className="text-xl text-gray-600">2,464,690 learners</p>

            <Link to="/courses/microsoft-power-bi" className="text-purple-700 hover:underline text-lg font-bold">
              Microsoft Power BI →
            </Link>
            <p className="text-xl text-gray-600">4,455,426 learners</p>

            <Link to="/courses/project-management" className="text-purple-700 hover:underline text-lg font-bold">
              Project Management →
            </Link>
            <p className="text-xl text-gray-600">3,822,469 learners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
