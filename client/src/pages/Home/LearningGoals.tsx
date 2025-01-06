import handsOnImage from "/images/hands-on-practice.png"; // Substitua pelos caminhos reais
import certificationImage from "/images/certificate.png";
import insightsImage from "/images/empty-state-1.png";
import customizableImage from "/images/organization.png";
import containerizationImage from "/images/desktop-hands-on-learning-2x (1).png";

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
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-8 py-16 bg-gray-50">
      {/* Features Section */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Learning focused on your goals
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center p-6 border rounded-lg shadow-md ${
              index === 0 ? "border-purple-500" : "border-gray-200"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3
                className={`text-lg font-bold ${
                  index === 0 ? "text-purple-600" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              {feature.badge && (
                <span className="text-purple-600 text-xs font-bold mt-2 inline-block">
                  {feature.badge}
                </span>
              )}
              {feature.linkText && (
                <a
                  href="#"
                  className="text-purple-600 text-sm font-bold mt-2 inline-block"
                >
                  {feature.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Analysis Section */}
      <div className="flex-1 max-w-md">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
