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
    <div className="bg-gray-50 px-8 py-16">
      <h2 className="text-center font-sans text-3xl font-extrabold text-gray-900">
        Accelerate growth — for you or your organization
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Reach goals faster with one of our plans or programs. Try one free today
        or contact sales to learn more.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg border p-6 shadow-sm ${plan.borderColor}`}
          >
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xl">
                {plan.placeholderIcon}
              </div>
              <div>
                <h3 className="font-sans text-xl font-extrabold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
            </div>
            <p className="font-sans text-lg font-extrabold text-gray-900">
              {plan.price}
            </p>
            {plan.details && (
              <p className="mt-1 text-sm text-gray-600">{plan.details}</p>
            )}
            <button className="mt-4 w-full rounded bg-black py-2 font-sans font-extrabold text-white hover:bg-gray-800 focus:outline-none">
              {plan.buttonText}
            </button>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="mr-2 font-sans font-extrabold text-green-600">
                    ✓
                  </span>
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
