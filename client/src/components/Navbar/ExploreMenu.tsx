

import React, { useState } from "react";

const ExploreMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    {
      title: "Browse Certifications",
      subcategories: [],
    },
    {
      title: "Development",
      subcategories: [
        "Web Development",
        "Data Science",
        "Mobile Development",
        "Programming Languages",
        "Game Development",
        "Database Design & Development",
        "Software Testing",
        "Software Engineering",
        "Software Development Tools",
        "No-Code Development",
      ],
    },
    {
      title: "Business",
      subcategories: [
        "Entrepreneurship",
        "Communication",
        "Management",
        "Sales",
        "Business Strategy",
        "Operations",
        "Project Management",
        "Business Law",
        "Business Analytics & Intelligence",
        "Human Resources",
        "Industry",
        "E-Commerce",
        "Media",
        "Real Estate",
        "Other Business",
      ],
    },
    {
      title: "Finance & Accounting",
      subcategories: [
        "Accounting & Bookkeeping",
        "Compliance",
        "Cryptocurrency & Blockchain",
        "Economics",
        "Finance",
        "Finance Cert & Exam Prep",
        "Financial Modeling & Analysis",
        "Investing & Trading",
        "Money Management Tools",
        "Taxes",
        "Other Finance & Accounting",
      ],
    },
    {
      title: "IT & Software",
      subcategories: [
        "IT Certifications",
        "Network & Security",
        "Hardware",
        "Operating Systems & Servers",
        "Other IT & Software",
      ],
    },
    {
      title: "Office Productivity",
      subcategories: [
        "Microsoft",
        "Apple",
        "Google",
        "SAP",
        "Oracle",
        "Other Office Productivity",
      ],
    },
    {
      title: "Personal Development",
      subcategories: [
        "Personal Transformation",
        "Personal Productivity",
        "Leadership",
        "Career Development",
        "Parenting & Relationships",
        "Happiness",
        "Esoteric Practices",
        "Religion & Spirituality",
        "Personal Brand Building",
        "Creativity",
        "Influence",
        "Self Esteem & Confidence",
        "Stress Management",
        "Memory & Study Skills",
        "Motivation",
        "Other Personal Development",
      ],
    },
    {
      title: "Design",
      subcategories: [
        "Web Design",
        "Graphic Design & Illustration",
        "Design Tools",
        "User Experience Design",
        "Game Design",
        "3D & Animation",
        "Fashion Design",
        "Architectural Design",
        "Interior Design",
        "Other Design",
      ],
    },
    {
      title: "Marketing",
      subcategories: [
        "Digital Marketing",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Branding",
        "Marketing Fundamentals",
        "Marketing Analytics & Automation",
        "Public Relations",
        "Paid Advertising",
        "Video & Mobile Marketing",
        "Content Marketing",
        "Growth Hacking",
        "Affiliate Marketing",
        "Product Marketing",
        "Other Marketing",
      ],
    },
    {
      title: "Lifestyle",
      subcategories: [
        "Arts & Crafts",
        "Beauty & Makeup",
        "Esoteric Practices",
        "Food & Beverage",
        "Gaming",
        "Home Improvement & Gardening",
        "Pet Care & Training",
        "Travel",
        "Other Lifestyle",
      ],
    },
    {
      title: "Photography & Video",
      subcategories: [
        "Digital Photography",
        "Photography",
        "Portrait Photography",
        "Photography Tools",
        "Commercial Photography",
        "Video Design",
        "Other Photography & Video",
      ],
    },
    {
      title: "Health & Fitness",
      subcategories: [
        "Fitness",
        "General Health",
        "Sports",
        "Nutrition & Diet",
        "Yoga",
        "Mental Health",
        "Martial Arts & Self Defense",
        "Safety & First Aid",
        "Dance",
        "Meditation",
        "Other Health & Fitness",
      ],
    },
    {
      title: "Music",
      subcategories: [
        "Instruments",
        "Music Production",
        "Music Fundamentals",
        "Vocal",
        "Music Techniques",
        "Music Software",
        "Other Music",
      ],
    },
    {
      title: "Teaching & Academics",
      subcategories: [
        "Engineering",
        "Humanities",
        "Math",
        "Science",
        "Online Education",
        "Social Science",
        "Language Learning",
        "Teacher Training",
        "Test Prep",
        "Other Teaching & Academics",
      ],
    },
  ];

  return (
    <div className="relative group">
      {/* Trigger button */}
      <button
        className="text-lg font-semibold hover:text-gray-700 focus:outline-none"
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
      >
        Explore
      </button>

      {/* Main dropdown menu */}
      {menuVisible && (
        <div
          className="absolute z-50 left-0 w-64 bg-white shadow-lg rounded-lg opacity-100"
          onMouseEnter={() => setMenuVisible(true)}
          onMouseLeave={() => setMenuVisible(false)}
        >
          <ul className="p-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative text-gray-900 text-sm hover:text-purple-600 cursor-pointer px-4 py-2 ${
                  item.subcategories.length ? "flex justify-between items-center" : ""
                }`}
              >
                {item.title}
                {item.subcategories.length > 0 && (
                  <span className="text-gray-500">&#8250;</span>
                )}
                {hoveredItem === index && item.subcategories.length > 0 && (
                  <div
                    className="absolute top-0 left-full bg-white shadow-lg rounded-lg"
                    style={{
                      minHeight: "100%", // Igualar a altura ao menu principal
                      width: "100%", // Mesma largura do menu principal
                    }}
                  >
                    <ul className="p-4">
                      {item.subcategories.map((subcategory, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-700 text-sm hover:text-purple-600 cursor-pointer px-4 py-2"
                        >
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploreMenu;







