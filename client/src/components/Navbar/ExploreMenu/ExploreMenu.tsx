import { menuItems } from "@/utils/menuItems";
import { useState } from "react";

const ExploreMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="relative group">
      {/* Botão que ativa o menu */}
      <button
        className="text-lg font-semibold hover:text-gray-700 focus:outline-none"
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
      >
        Explore
      </button>

      {/* Menu principal */}
      {menuVisible && (
        <div
          className="absolute z-50 left-0 w-64 bg-white shadow-lg rounded-lg opacity-100"
          onMouseEnter={() => setMenuVisible(true)}
          onMouseLeave={() => setMenuVisible(false)}
        >
          <div className="px-4 pt-4  pb-1 font-bold text-gray-900">
            Browse Certifications
          </div>
          <ul className="">
            {menuItems.map((item, index) => (
              <>
                {index === 1 && <hr className="my-2 border-gray-300" />}
                <li
                  key={index}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative text-gray-900 text-sm hover:text-purple-600 cursor-pointer px-4 py-2 ${
                    item.subcategories.length
                      ? "flex justify-between items-center"
                      : ""
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
                        minHeight: "100%",
                        width: "100%",
                      }}
                    >
                      <ul className="p-4">
                        {item.subcategories.map((subcategory, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-gray-700 text-sm hover:text-purple-600 cursor-pointer px-4 py-2"
                          >
                            {typeof subcategory === "string" ? (
                              subcategory
                            ) : (
                              <>
                                <strong>{subcategory.group}</strong>
                                <ul className="ml-4">
                                  {subcategory.items.map(
                                    (subItem, itemIndex: number) => (
                                      <li
                                        key={itemIndex}
                                        className="text-gray-600 hover:text-purple-500"
                                      >
                                        {subItem}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploreMenu;
