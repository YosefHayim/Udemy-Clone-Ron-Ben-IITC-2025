import AtagBtn from "@/components/AtagBtn/AtagBtn";
import { Category, Subcategory } from "@/types/types";
import { categoriesData } from "@/utils/categoriesData";
import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CategoriesMenu = () => {
  const navigate = useNavigate();
  const [isExploring, setIsExploring] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [hoveredSecondSubMenu, setHoveredSecondSubMenu] = useState<
    boolean | null
  >(false);

  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const subMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const getCategoryData = (categoryName: string | null): Category | null => {
    return categoryName
      ? categoriesData.find((cat) => cat?.category === categoryName) || null
      : null;
  };

  const getSubCategoryData = (
    categoryName: string | null,
    subCategoryName: string | null,
  ): Subcategory | null => {
    const category = getCategoryData(categoryName);
    if (!category || !category.subcategory) return null;

    return subCategoryName
      ? category.subcategory.find(
          (subCat) =>
            subCat.title === subCategoryName || subCat.name === subCategoryName,
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
        searchTerm.toLowerCase(),
      )}`,
    );
  };

  return (
    <div className="relative z-50 inline-block w-auto text-left font-medium text-gray-600">
      {/* Botão Explore com hover para mostrar menu */}
      <div
        className="inline-block"
        onMouseEnter={() => handleMenuEnter("main")}
        onMouseLeave={handleMenuLeave}
      >
        <AtagBtn aTagName="Explore" />
        {/* Menu one */}
        {hoveredMenu && (
          <div
            className="absolute left-0 top-[130%] z-10 min-h-[40rem] w-64 rounded-l-lg border border-gray-300 bg-white text-sm"
            onMouseEnter={() => handleMenuEnter("main")}
            onMouseLeave={handleMenuLeave}
          >
            {/* Título */}
            <div className="px-4 py-2 font-bold text-gray-700">
              Browse Certifications
            </div>
            {/* menu */}
            {categoriesData.map((category, index: number) => (
              <>
                <div
                  onClick={() => handleNavigate(category?.category || "")}
                  key={index}
                  className={`flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100 ${
                    hoveredMenu === category?.category
                      ? "font-bold text-purple-700"
                      : ""
                  }`}
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
                  <hr className="my-2 border-t border-gray-300" />
                )}
              </>
            ))}

            {/* First Submenu */}
            {hoveredMenu && hoveredMenu !== "main" && (
              <div
                className="absolute left-[15.9rem] top-[-0.05rem] z-20 mt-0 min-h-[40rem] w-64 border border-y-gray-300 bg-white"
                onMouseEnter={() => handleSubMenuEnter(hoveredMenu)}
                onMouseLeave={handleSubMenuLeave}
              >
                {getCategoryData(hoveredMenu)?.subcategory.map(
                  (subCategory, index) => (
                    <div key={index}>
                      {/* Adiciona o título "Popular Issuers" antes de "Amazon Web Services (AWS) Certifications" */}
                      {subCategory.title ===
                        "Amazon Web Services (AWS) Certifications" && (
                        <div className="px-4 py-2 font-bold text-gray-700">
                          Popular Issuers
                        </div>
                      )}

                      {/* Adiciona "Popular Subjects" com linha em cima antes de "Cloud Certification" */}
                      {subCategory.title === "Cloud Certification" && (
                        <div className="mt-4 border-t  border-gray-300 px-4 pb-2 pt-4 font-bold text-gray-700">
                          Popular Subjects
                        </div>
                      )}

                      <div
                        onClick={() =>
                          handleNavigate(
                            subCategory?.title
                              ? subCategory.title
                              : categoriesData.topics[0],
                          )
                        }
                        className={`flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100 ${
                          hoveredSubMenu ===
                          (subCategory.title || subCategory.name)
                            ? "font-bold text-purple-700"
                            : ""
                        }`}
                        onMouseEnter={() =>
                          handleSubMenuEnter(
                            subCategory.title || subCategory.name || null,
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
                  ),
                )}
              </div>
            )}

            {/* Second Submenu */}
            {hoveredSubMenu && hoveredMenu && (
              <div
                className="absolute left-[15.8rem]  top-[0.05rem] z-30 ml-64 mt-[-0.1rem] min-h-[40rem] w-64 rounded-r-lg border border-gray-300 bg-white"
                onMouseEnter={handleSecondSubMenuEnter}
                onMouseLeave={handleSecondSubMenuLeave}
              >
                <div className="px-4 py-2 font-bold text-gray-700">
                  Popular topics
                </div>
                {getSubCategoryData(hoveredMenu, hoveredSubMenu)?.topics?.map(
                  (topic: any, index: number) => (
                    <div
                      onClick={() => handleNavigate(topic)}
                      key={index}
                      className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100"
                    >
                      <span>
                        {typeof topic === "string"
                          ? topic
                          : topic.title || topic.group || "web"}
                      </span>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesMenu;
