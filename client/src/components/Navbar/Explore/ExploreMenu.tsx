// import { useState } from "react";
// import MenuData from "./ExploreData";

// const ExploreMenu = () => {
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);
//   const [menuVisible, setMenuVisible] = useState(false);


//   return (
//     <div className="relative group">
//       {/* Botão que ativa o menu */}
//       <button
//         className="text-lg font-semibold hover:text-gray-700 focus:outline-none"
//         onMouseEnter={() => setMenuVisible(true)}
//         onMouseLeave={() => setMenuVisible(false)}
//       >
//         Explore
//       </button>

//       {/* Menu principal */}
//       {menuVisible && (
//         <div
//           className="absolute z-50 left-0 w-64 bg-white shadow-lg rounded-lg opacity-100"
//           onMouseEnter={() => setMenuVisible(true)}
//           onMouseLeave={() => setMenuVisible(false)}
//         >
//           <div className="px-4 pt-4  pb-1 font-bold text-gray-900">Browse Certifications</div>
//           <ul className="">
//             {menuItems.map((item, index) => (
//               <>
//                 {index === 1 && <hr className="my-2 border-gray-300" />}
//                 <li
//                   key={index}
//                   onMouseEnter={() => setHoveredItem(index)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                   className={`relative text-gray-900 text-sm hover:text-purple-600 cursor-pointer px-4 py-2 ${
//                     item.subcategories.length ? "flex justify-between items-center" : ""
//                   }`}
//                 >
//                   {item.title}
//                   {item.subcategories.length > 0 && (
//                     <span className="text-gray-500">&#8250;</span>
//                   )}
//                   {hoveredItem === index && item.subcategories.length > 0 && (
//                     <div
//                       className="absolute top-0 left-full bg-white shadow-lg rounded-lg"
//                       style={{
//                         minHeight: "100%",
//                         width: "100%",
//                       }}
//                     >
//                       <ul className="p-4">
//                         {item.subcategories.map((subcategory, subIndex) => (
//                           <li
//                             key={subIndex}
//                             className="text-gray-700 text-sm hover:text-purple-600 cursor-pointer px-4 py-2"
//                           >
//                             {typeof subcategory === "string" ? (
//                               subcategory
//                             ) : (
//                               <>
//                                 <strong>{subcategory.group}</strong>
//                                 <ul className="ml-4">
//                                   {subcategory.items.map((subItem, itemIndex) => (
//                                     <li
//                                       key={itemIndex}
//                                       className="text-gray-600 hover:text-purple-500"
//                                     >
//                                       {subItem}
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               </>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExploreMenu;

// components/ExploreMenu.tsx
import { useState } from "react";
import ExploreData from "../Explore/ExploreData";

const ExploreMenu = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  const getCategoryData = (categoryName: string) => {
    // Encontra a categoria com segurança
    return categoryName
      ? ExploreData.find((cat) => cat?.category === categoryName) || null
      : null
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

  return (
    <div className="relative inline-block text-left w-auto z-50">
      {/* Botão Explore */}
      <button className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none">
        Explore
      </button>

      {/* Menu Principal */}
      <div
        className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-10"
        onMouseLeave={() => {
          setHoveredMenu(null);
          setHoveredSubMenu(null);
        }}
      >
        {ExploreData.map((category, index) => (
          <div
            key={index}
            className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
            onMouseEnter={() => setHoveredMenu(category.category || null)}
          >
            {category.category || "Unnamed Category"}
          </div>
        ))}

        {/* Submenu */}
        {hoveredMenu && (
          <div className="absolute top-0 left-64 mt-0 w-64 bg-white border rounded-md shadow-lg z-20">
            {getCategoryData(hoveredMenu)?.subcategory.map((subCategory, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                onMouseEnter={() =>
                  setHoveredSubMenu(subCategory.title || subCategory.name || null)
                }
              >
                {subCategory.title || subCategory.name || "Unnamed Subcategory"}
              </div>
            ))}
          </div>
        )}

        {/* Segundo Submenu */}
        {hoveredSubMenu && hoveredMenu && (
          <div className="absolute top-0 left-full ml-64 mt-0 w-64 bg-white border rounded-md shadow-lg z-30">
            {getSubCategoryData(hoveredMenu, hoveredSubMenu)?.topics?.map(
              (topic, index) => (
                <div key={index} className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  {typeof topic === "string" ? topic : topic.title || topic.group || "Unnamed Topic"}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreMenu;



