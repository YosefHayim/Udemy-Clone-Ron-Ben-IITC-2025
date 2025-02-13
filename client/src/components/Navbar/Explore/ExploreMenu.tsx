import { Category, Subcategory } from "@/types/types";
import { exploreData } from "@/utils/exploreData";
import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ExploreMenu = () => {
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [hoveredSecondSubMenu, setHoveredSecondSubMenu] = useState<
    boolean | null
  >(false);

  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const subMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const getCategoryData = (categoryName: string | null): Category | null => {
    return categoryName
      ? exploreData.find((cat) => cat?.category === categoryName) || null
      : null;
  };

  const getSubCategoryData = (
    categoryName: string | null,
    subCategoryName: string | null
  ): Subcategory | null => {
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
    setIsExploring(true);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
      setHoveredSubMenu(null);
      setHoveredSecondSubMenu(false);
      setIsExploring(false);
    }, 300); // Atraso de 300ms para esconder o menu
  };

  const handleSubMenuEnter = (subMenu: string | null) => {
    if (subMenuTimeout.current) clearTimeout(subMenuTimeout.current);
    setHoveredSubMenu(subMenu);
    setHoveredSecondSubMenu(false);
    setIsExploring(true);
  };

  const handleSubMenuLeave = () => {
    subMenuTimeout.current = setTimeout(() => {
      setHoveredSubMenu(null);
      setHoveredSecondSubMenu(false);
      setIsExploring(false);
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

  const handleNavigate = (searchTerm: string) => {
    navigate(
      `/courses/search?src=ukw&q=${encodeURIComponent(
        searchTerm.toLowerCase()
      )}`
    );
  };

  const [isExploring, setIsExploring] = useState(false);

  return (
    <div className="relative inline-block text-left w-auto z-50 text-gray-600 font-medium">
      {/* Botão Explore com hover para mostrar menu */}
      <div
        className="inline-block"
        onMouseEnter={() => handleMenuEnter("main")}
        onMouseLeave={handleMenuLeave}
      >
        <button
          className={`text-[#020202] text-sm mb-3 font-[400] text-[0.9rem] rounded-md hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2
                   focus:ring-purple-300 ${isExploring ? "text-red-600" : "text-black"}`}>
          Explore
        </button>


        {/* Menu one */}
        {hoveredMenu && (
          <div
            className="absolute left-0 mt-[1.6rem] w-64 bg-white border border-gray-300 text-sm rounded-l-lg z-10 min-h-[40rem]"
            onMouseEnter={() => handleMenuEnter("main")}
            onMouseLeave={handleMenuLeave}
          >
            {/* Título */}
            <div className="px-4 py-2 font-bold text-gray-700">
              Browse Certifications
            </div>
            {/* menu */}
            {exploreData.map((category, index: number) => (
              <>
                <div
                  onClick={() => handleNavigate(category?.category || "")}
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

            {/* First Submenu */}
            {hoveredMenu && hoveredMenu !== "main" && (
              <div
                className="absolute top-[-0.05rem] left-[15.9rem] mt-0 w-64 bg-white border border-y-gray-300 z-20 min-h-[40rem]"
                onMouseEnter={() => handleSubMenuEnter(hoveredMenu)}
                onMouseLeave={handleSubMenuLeave}
              >
                {getCategoryData(hoveredMenu)?.subcategory.map((subCategory, index) => (
                  <div key={index}>
                    {/* Adiciona o título "Popular Issuers" antes de "Amazon Web Services (AWS) Certifications" */}
                    {subCategory.title === "Amazon Web Services (AWS) Certifications" && (
                      <div className="px-4 py-2 font-bold text-gray-700">Popular Issuers</div>
                    )}

                    {/* Adiciona "Popular Subjects" com linha em cima antes de "Cloud Certification" */}
                    {subCategory.title === "Cloud Certification" && (
                      <div className="px-4 pb-2  pt-4 mt-4 font-bold text-gray-700 border-t border-gray-300">
                        Popular Subjects
                      </div>
                    )}

                    <div
                      onClick={() =>
                        handleNavigate(
                          subCategory?.title
                            ? subCategory?.title
                            : subCategory?.topics[0]
                        )
                      }
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
                  </div>
                ))}
              </div>
            )}


            {/* Second Submenu */}
            {hoveredSubMenu && hoveredMenu && (
              <div
                className="absolute top-[0.05rem]  left-[15.8rem] ml-64 mt-[-0.1rem] w-64 bg-white border border-gray-300 rounded-r-lg z-30 min-h-[40rem]"
                onMouseEnter={handleSecondSubMenuEnter}
                onMouseLeave={handleSecondSubMenuLeave}
              >
                <div className="px-4 py-2 font-bold text-gray-700">Popular topics</div>
                {getSubCategoryData(hoveredMenu, hoveredSubMenu)?.topics?.map(
                  (topic: any, index: number) => (
                    <div
                      onClick={() => handleNavigate(topic)}
                      key={index}
                      className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex justify-between items-center"
                    >
                      <span>
                        {typeof topic === "string"
                          ? topic
                          : topic.title || topic.group || "web"}
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
