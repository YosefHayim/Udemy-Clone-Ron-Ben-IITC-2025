import { useState } from "react";

const SideMenuPrivacy = () => {
  const [activeItem, setActiveItem] = useState(
    "Udemy Business Privacy Statement",
  ); // Item ativo

  const menuItems = [
    "Terms of Use",
    "Privacy policy",
    "Intellectual Property Policy",
    "Udemy API Agreement",
    "Master Services Agreement",
    "Udemy Business Privacy Statement",
    "Instructor Terms",
    "Affiliate Terms & Conditions",
    "Udemy Business Leadership Academy Terms & Conditions",
    "Udemy Business Pro Terms & Conditions",
    "Launch Services",
    "Pricing and Promotions Policy",
  ];

  return (
    <div className="flex h-screen">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md">
        <ul className="py-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer px-6 py-3 text-sm font-medium ${
                activeItem === item
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveItem(item)} // Define o item ativo ao clicar
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main
        className={`flex-1 p-6 ${
          activeItem === "Udemy Business Privacy Statement"
            ? "bg-gray-100" // Fundo alterado para esta página específica
            : "bg-white"
        }`}
      >
        <h1 className="mb-4 text-2xl font-extrabold">{activeItem}</h1>
        <p className="text-gray-700">
          Content for <strong>{activeItem}</strong> goes here. You can customize
          this section for each page as needed.
        </p>
      </main>
    </div>
  );
};

export default SideMenuPrivacy;
