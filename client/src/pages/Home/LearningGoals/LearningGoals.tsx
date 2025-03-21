import handsOnImage from "/images/hands-on-practice.png"; // Substitua pelos caminhos reais
import certificationImage from "/images/certificate.png";
import insightsImage from "/images/empty-state-1.png";
import customizableImage from "/images/organization.png";
import containerizationImage from "/images/desktop-hands-on-learning-2x (1).png";
import { Link } from "react-router-dom";

const LearningGoals = () => {
  const features = [
    {
      title: "Hands-on training",
      description:
        "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
      image: handsOnImage,
    },
    {
      title: "Certification prep",
      description:
        "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
      linkText: "Explore courses →",
      image: certificationImage,
    },
    {
      title: "Insights and analytics",
      description:
        "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      badge: "Enterprise Plan",
      linkText: "Find out more →",
      image: insightsImage,
    },
    {
      title: "Customizable content",
      description:
        "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      badge: "Enterprise Plan",
      linkText: "Find out more →",
      image: customizableImage,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 bg-gray-50 px-8 py-16 lg:flex-row lg:items-start">
      {/* Features Section */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Learning focused on your goals
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-center rounded-lg border p-6 shadow-md hover:bg-gray-100 ${
              index === 0 ? "border-purple-500" : "border-gray-200"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="mr-4 h-12 w-12"
            />
            <div>
              <h3
                className={`text-lg font-bold ${
                  index === 0 ? "text-purple-600" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
              {feature.badge && (
                <span className="mt-2 inline-block text-xs font-bold text-purple-600">
                  {feature.badge}
                </span>
              )}
              {feature.linkText && (
                <Link
                  to="#"
                  className="mt-2 inline-block text-sm font-bold text-purple-600"
                >
                  {feature.linkText}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Analysis Section */}
      <div className="max-w-md flex-1">
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <img
            src={containerizationImage}
            alt="Containerization analysis"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningGoals;
