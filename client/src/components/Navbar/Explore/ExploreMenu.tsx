import { exploreData } from "@/utils/exploreData";
import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ExploreMenu = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [hoveredSecondSubMenu, setHoveredSecondSubMenu] = useState<
    boolean | null
  >(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const subMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const getCategoryData = (categoryName: string | null) => {
    return categoryName
      ? exploreData.find((cat) => cat?.category === categoryName) || null
      : null;
  };

  const getSubCategoryData = (
    categoryName: { title?: string; name?: string },
    subCategoryName: { title?: string; name?: string }
  ) => {
    const category = getCategoryData(categoryName);
    if (!category || !category.subcategory) return null;

    return subCategoryName
      ? category.subcategory.find(
          (subCat) =>
            subCat.title === subCategoryName.title ||
            subCat.name === subCategoryName.name
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
        <button className="text-[#020202] text-sm  mb-3 font-[400] text-[0.9rem] rounded-md hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300">
          Explore
        </button>

        {/* Menu Principal */}
        {hoveredMenu && (
          <div
            className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-10"
            onMouseEnter={() => handleMenuEnter("main")}
            onMouseLeave={handleMenuLeave}
          >
            {/* Título */}
            <div className="px-4 py-2 font-bold text-gray-700">
              Browse Certifications
            </div>

            {exploreData.map((category, index: number) => (
              <>
                <div
                  key={index}
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex justify-between items-center"
                  onMouseEnter={() =>
                    handleMenuEnter(category?.category || null)
                  }
                >
                  <span>{category?.category || "Unnamed Category"}</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
                {/* Linha divisória entre "Certification Preparation" e "Development" */}
                {category?.category === "Certification Preparation" && (
                  <hr className="border-t border-gray-300 my-2" />
                )}
              </>
            ))}

            {/* Submenu */}
            {hoveredMenu && hoveredMenu !== "main" && (
              <div
                className="absolute top-0 left-64 mt-0 w-64 bg-white border rounded-md shadow-lg z-20"
                onMouseEnter={() => handleSubMenuEnter(hoveredMenu)}
                onMouseLeave={handleSubMenuLeave}
              >
                {getCategoryData(hoveredMenu)?.subcategory.map(
                  (subCategory, index) => (
                    <div
                      key={index}
                      className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex justify-between items-center"
                      onMouseEnter={() =>
                        handleSubMenuEnter(
                          subCategory.title || subCategory.name || null
                        )
                      }
                    >
                      <span>
                        {subCategory.title ||
                          subCategory.name ||
                          "Unnamed Subcategory"}
                      </span>
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </div>
                  )
                )}
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
                  (topic: any, index: number) => (
                    <div
                      key={index}
                      className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex justify-between items-center"
                    >
                      <span>
                        {typeof topic === "string"
                          ? topic
                          : topic.title || topic.group || "Unnamed Topic"}
                      </span>
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



