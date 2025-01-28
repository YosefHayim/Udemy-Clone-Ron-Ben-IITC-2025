import { categories } from "@/utils/categoriesOfCoursesNavbarHover";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index: number): void => {
    setActiveCategory(index);
  };

  const handleMouseLeave = (): void => {
    setActiveCategory(null);
  };

  const getArrowPosition = (index: number): number => {
    const buttons =
      document.querySelectorAll<HTMLButtonElement>(".menu-button");
    if (buttons[index]) {
      const rect = buttons[index].getBoundingClientRect();
      return rect.left + rect.width / 2;
    }
    return 0;
  };

  const handleNavigate = (category: string) => {
    navigate(
      `/courses/search?src=ukw&q=${encodeURIComponent(category.toLowerCase())}`
    );
  };
  return (
    <div>
      {/* White Menu */}
      <div
        className="bg-white shadow-md z-20 relative"
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center items-center py-4 space-x-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <button
                className="menu-button text-gray-800 font-medium hover:text-purple-600"
                onClick={() => handleNavigate(category.title)}
              >
                {category.title}
              </button>
            </div>
          ))}
        </div>

        {/* Black Submenu */}
        {activeCategory !== null && (
          <div
            className="absolute top-full left-0 w-screen bg-black text-white py-4 z-30"
            onMouseLeave={handleMouseLeave}
          >
            {/* Black Arrow */}
            <div
              className="absolute top-[-8px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"
              style={{
                left: `${getArrowPosition(activeCategory)}px`,
              }}
            ></div>

            {/* Submenu Items */}
            <div className="w-full max-w-screen-xl mx-auto flex justify-center space-x-8">
              {categories[activeCategory]?.subcategories.map(
                (subcategory, index) => (
                  <div
                    key={index}
                    className="hover:underline cursor-pointer"
                    onClick={() => handleNavigate(subcategory)}
                  >
                    {subcategory}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
