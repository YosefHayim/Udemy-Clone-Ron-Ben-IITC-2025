import { Link } from "react-router-dom";

const TrendingNow = () => {
  return (
    <div className="bg-gray-100 px-12 py-16">
      <h2 className="font-sans text-4xl font-extrabold leading-tight text-gray-900">
        Trending Now
      </h2>
      <div className="mt-6 flex flex-col justify-between border-t border-gray-300 pt-6 lg:flex-row">
        {/* Coluna 1 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="font-sans text-xl font-extrabold text-gray-900">
            ChatGPT is a top skill
          </h3>
          <Link
            to="/chatgpt-courses"
            className="mt-2 block text-lg text-purple-600 hover:underline"
          >
            See ChatGPT courses →
          </Link>
          <p className="mt-1 text-sm text-gray-600">3,957,244 learners</p>
          <button className="mt-6 flex items-center space-x-2 rounded-lg border border-gray-900 px-6 py-3 font-sans font-extrabold text-gray-900 transition duration-200 hover:bg-gray-100 focus:outline-none">
            Show all trending skills
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Coluna 2 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="mb-4 font-sans text-lg font-extrabold text-gray-900">
            Development
          </h3>
          <div className="space-y-3">
            <Link
              to="/courses/python"
              className="text-purple-600 hover:underline"
            >
              Python →
            </Link>
            <p className="text-sm text-gray-600">46,814,772 learners</p>

            <Link
              to="/courses/web-development"
              className="text-purple-600 hover:underline"
            >
              Web Development →
            </Link>
            <p className="text-sm text-gray-600">13,826,607 learners</p>

            <Link
              to="/courses/data-science"
              className="text-purple-600 hover:underline"
            >
              Data Science →
            </Link>
            <p className="text-sm text-gray-600">7,612,352 learners</p>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h3 className="mb-4 font-sans text-lg font-extrabold text-gray-900">
            Design
          </h3>
          <div className="space-y-3">
            <Link
              to="/courses/blender"
              className="text-purple-600 hover:underline"
            >
              Blender →
            </Link>
            <p className="text-sm text-gray-600">2,833,276 learners</p>

            <Link
              to="/courses/graphic-design"
              className="text-purple-600 hover:underline"
            >
              Graphic Design →
            </Link>
            <p className="text-sm text-gray-600">4,426,658 learners</p>

            <Link
              to="/courses/adobe-photoshop"
              className="text-purple-600 hover:underline"
            >
              Adobe Photoshop →
            </Link>
            <p className="text-sm text-gray-600">12,570,400 learners</p>
          </div>
        </div>

        {/* Coluna 4 */}
        <div className="lg:w-1/4">
          <h3 className="mb-4 font-sans text-lg font-extrabold text-gray-900">
            Business
          </h3>
          <div className="space-y-3">
            <Link
              to="/courses/pmp-certification"
              className="text-purple-600 hover:underline"
            >
              PMI Project Management Professional (PMP) →
            </Link>
            <p className="text-sm text-gray-600">2,464,690 learners</p>

            <Link
              to="/courses/microsoft-power-bi"
              className="text-purple-600 hover:underline"
            >
              Microsoft Power BI →
            </Link>
            <p className="text-sm text-gray-600">4,455,426 learners</p>

            <Link
              to="/courses/project-management"
              className="text-purple-600 hover:underline"
            >
              Project Management →
            </Link>
            <p className="text-sm text-gray-600">3,822,469 learners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
