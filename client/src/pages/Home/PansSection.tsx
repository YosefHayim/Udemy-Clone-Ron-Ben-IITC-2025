const plans = [
  {
    name: "Personal Plan",
    description: "For you",
    price: "Starting at ₪66.67 per month",
    details: "Billed monthly or annually. Cancel anytime.",
    buttonText: "Try it free →",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
    borderColor: "border-purple-500",
    placeholderIcon: "👤", // Placeholder para o ícone
  },
  {
    name: "Team Plan",
    description: "For your team",
    price: "₪110.00 a month per user",
    details: "Billed annually. Cancel anytime.",
    buttonText: "Try it free →",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
    borderColor: "border-gray-200",
    placeholderIcon: "👥", // Placeholder para o ícone
  },
  {
    name: "Enterprise Plan",
    description: "For your whole organization",
    price: "Contact sales for pricing",
    details: "",
    buttonText: "Request a demo →",
    features: [
      "Access to 27,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
    borderColor: "border-purple-500",
    placeholderIcon: "🏢", // Placeholder para o ícone
  },
];

const PlansSection = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Accelerate growth — for you or your organization
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Reach goals faster with one of our plans or programs. Try one free today
        or contact sales to learn more.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-sm p-6 ${plan.borderColor}`}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-gray-200 rounded-full mr-4">
                {plan.placeholderIcon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">{plan.price}</p>
            {plan.details && (
              <p className="text-sm text-gray-600 mt-1">{plan.details}</p>
            )}
            <button className="mt-4 w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-800">
              {plan.buttonText}
            </button>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
