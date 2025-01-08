import { useState } from "react";

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        {
            title: "Development",
            subcategories: [
                "Web Development",
                "Mobile Development",
                "Programming Languages",
                "Game Development",
                "Databases",
                "Software Testing",
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
            ],
        },
        {
            title: "Finance & Accounting",
            subcategories: [
                "Accounting",
                "Cryptocurrency",
                "Finance",
                "Financial Analysis",
                "Investments",
            ],
        },
        {
            title: "IT & Software",
            subcategories: [
                "IT Certifications",
                "Networking",
                "Hardware",
                "Servers",
                "Operating Systems",
            ],
        },
        {
            title: "Office Productivity",
            subcategories: ["Microsoft", "Apple", "Google", "SAP", "Oracle"],
        },
        {
            title: "Personal Development",
            subcategories: [
                "Personal Transformation",
                "Productivity",
                "Leadership",
                "Career Development",
                "Relationships",
            ],
        },
        {
            title: "Design",
            subcategories: [
                "Web Design",
                "Graphic Design",
                "Design Tools",
                "Game Design",
                "3D & Animation",
            ],
        },
        {
            title: "Marketing",
            subcategories: [
                "Digital Marketing",
                "SEO",
                "Social Media Marketing",
                "Branding",
                "Marketing Automation",
            ],
        },
        {
            title: "Health & Fitness",
            subcategories: [
                "Fitness",
                "General Health",
                "Nutrition",
                "Yoga",
                "Mental Health",
            ],
        },
        {
            title: "Music",
            subcategories: [
                "Instruments",
                "Music Production",
                "Music Fundamentals",
                "Vocal",
                "Music Software",
            ],
        },
    ];

    const handleMouseEnter = (index) => {
        setActiveCategory(index);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

    return (
        <div>
            {/* Main Menu */}
            <div
                className="w-screen bg-white shadow-md z-10"
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex justify-between items-center py-4 px-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            {/* Category Button */}
                            <button className="text-gray-700 font-medium hover:text-purple-600">
                                {category.title}
                            </button>

                            {/* Submenu */}
                            {activeCategory === index && (
                                <div className="absolute top-full left-0 w-screen bg-black text-white py-4 z-20">
                                    {/* Triangle Pointer */}
                                    <div className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"></div>

                                    {/* Submenu Content */}
                                    <div className="container mx-auto flex justify-center space-x-8">
                                        {category.subcategories.map((subcategory, idx) => (
                                            <div key={idx} className="hover:underline">
                                                {subcategory}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Menu;
