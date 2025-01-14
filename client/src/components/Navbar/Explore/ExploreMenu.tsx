import { useState, useRef } from "react";
import ExploreData from "../Explore/ExploreData";

const ExploreMenu = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [hoveredSecondSubMenu, setHoveredSecondSubMenu] = useState<boolean>(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const subMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const getCategoryData = (categoryName: string) => {
    return categoryName
      ? ExploreData.find((cat) => cat?.category === categoryName) || null
      : null;
  };

  const getSubCategoryData = (categoryName: string, subCategoryName: string | null) => {
    const category = getCategoryData(categoryName);
    if (!category || !category.subcategory) return null;
    return subCategoryName
      ? category.subcategory.find(
          (subCat) =>
            subCat.title === subCategoryName || subCat.name === subCategoryName
        ) || null
      : null;
  };

  const handleMenuEnter = (menu: string | null) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setHoveredMenu(menu);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
      setHoveredSubMenu(null);
      setHoveredSecondSubMenu(false);
    }, 300); // Atraso de 300ms para esconder o menu
  };

  const handleSubMenuEnter = (subMenu: string | null) => {
    if (subMenuTimeout.current) clearTimeout(subMenuTimeout.current);
    setHoveredSubMenu(subMenu);
    setHoveredSecondSubMenu(false);
  };

  const handleSubMenuLeave = () => {
    subMenuTimeout.current = setTimeout(() => {
      setHoveredSubMenu(null);
      setHoveredSecondSubMenu(false);
    }, 300); // Atraso de 300ms para esconder o submenu
  };

  const handleSecondSubMenuEnter = () => {
    if (subMenuTimeout.current) clearTimeout(subMenuTimeout.current);
    setHoveredSecondSubMenu(true);
  };

  const handleSecondSubMenuLeave = () => {
    subMenuTimeout.current = setTimeout(() => {
      setHoveredSecondSubMenu(false);
    }, 300);
  };

  return (
    <div className="relative inline-block text-left w-auto z-50">
      {/* Botão Explore com hover para mostrar menu */}
      <div
        className="inline-block"
        onMouseEnter={() => handleMenuEnter("main")}
        onMouseLeave={handleMenuLeave}
      >
        <button className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none">
          Explore
        </button>

        {/* Menu Principal */}
        {hoveredMenu && (
          <div
            className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-10"
            onMouseEnter={() => handleMenuEnter("main")}
            onMouseLeave={handleMenuLeave}
          >
            {ExploreData.map((category, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                onMouseEnter={() => handleMenuEnter(category.category || null)}
              >
                {category.category || "Unnamed Category"}
              </div>
            ))}

            {/* Submenu */}
            {hoveredMenu && hoveredMenu !== "main" && (
              <div
                className="absolute top-0 left-64 mt-0 w-64 bg-white border rounded-md shadow-lg z-20"
                onMouseEnter={() => handleSubMenuEnter(hoveredMenu)}
                onMouseLeave={handleSubMenuLeave}
              >
                {getCategoryData(hoveredMenu)?.subcategory.map((subCategory, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                    onMouseEnter={() => handleSubMenuEnter(subCategory.title || subCategory.name || null)}
                  >
                    {subCategory.title || subCategory.name || "Unnamed Subcategory"}
                  </div>
                ))}
              </div>
            )}

            {/* Segundo Submenu */}
            {hoveredSubMenu && hoveredMenu && (
              <div
                className="absolute top-0 left-full ml-64 mt-0 w-64 bg-white border rounded-md shadow-lg z-30"
                onMouseEnter={handleSecondSubMenuEnter}
                onMouseLeave={handleSecondSubMenuLeave}
              >
                {getSubCategoryData(hoveredMenu, hoveredSubMenu)?.topics?.map(
                  (topic, index) => (
                    <div
                      key={index}
                      className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                    >
                      {typeof topic === "string"
                        ? topic
                        : topic.title || topic.group || "Unnamed Topic"}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreMenu;



