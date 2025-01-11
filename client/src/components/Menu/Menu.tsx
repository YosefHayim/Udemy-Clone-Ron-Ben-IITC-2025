import { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: "Development",
      subcategories: [
        "Desenvolvimento Web",
        "Desenvolvimento móvel",
        "Linguagens de programação",
        "Desenvolvimento de games",
        "Design e desenvolvimento de bancos de dados",
        "Teste de software",
      ],
    },
    {
      title: "Business",
      subcategories: [
        "Empreendedorismo",
        "Comunicação",
        "Administração",
        "Vendas",
        "Estratégia de negócios",
      ],
    },
    {
      title: "Finance & Accounting",
      subcategories: [
        "Contabilidade e escrituração contábil",
        "Criptomoeda e blockchain",
        "Finanças",
        "Modelagem e análise financeira",
        "Investimentos e trading",
      ],
    },
    {
      title: "IT and Software",
      subcategories: [
        "Certificações de TI",
        "Rede e segurança",
        "Hardware",
        "Sistemas operacionais e servidores",
        "Mais opções em TI e software",
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
        "Mais opções em produtividade no escritório",
      ],
    },
    {
      title: "Personal Development",
      subcategories: [
        "Transformação pessoal",
        "Produtividade pessoal",
        "Liderança",
        "Desenvolvimento de carreira",
        "Maternidade/paternidade e relacionamentos",
      ],
    },
    {
      title: "Design",
      subcategories: [
        "Web design",
        "Design gráfico e ilustração",
        "Ferramentas de design",
        "Design de experiência do usuário",
        "Design de games",
        "3D e animação",
      ],
    },
    {
      title: "Marketing",
      subcategories: [
        "Marketing digital",
        "Otimização de mecanismo de busca",
        "Marketing de redes sociais",
        "Branding",
        "Fundamentos de marketing",
        "Análise de marketing e automação",
      ],
    },
    {
      title: "Health & Fitness",
      subcategories: [
        "Fitness",
        "Saúde geral",
        "Esportes",
        "Nutrição e dieta",
        "Yoga",
        "Saúde mental",
      ],
    },
    {
      title: "Music",
      subcategories: [
        "Instrumentos",
        "Produção musical",
        "Fundamentos da música",
        "Vocais",
        "Técnicas de música",
        "Software de música",
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const getArrowPosition = (index) => {
    const buttons = document.querySelectorAll(".menu-button");
    if (buttons[index]) {
      const rect = buttons[index].getBoundingClientRect();
      return rect.left + rect.width / 2;
    }
    return 0;
  };

  return (
    <div>
      {/* Menu Branco */}
      <div className="bg-white shadow-md z-20 relative" onMouseLeave={handleMouseLeave}>
        <div className="flex justify-center items-center py-4 space-x-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group" onMouseEnter={() => handleMouseEnter(index)}>
              <button className="menu-button text-gray-800 font-medium hover:text-purple-600">
                {category.title}
              </button>
            </div>
          ))}
        </div>

        {/* Submenu Preto */}
        {activeCategory !== null && (
          <div className="absolute top-full left-0 w-screen bg-black text-white py-4 z-30" onMouseLeave={handleMouseLeave}>
            {/* Seta Preta */}
            <div
              className="absolute top-[-8px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"
              style={{
                left: `${getArrowPosition(activeCategory)}px`,
              }}
            ></div>

            {/* Palavras no Submenu Preto */}
            <div className="w-full max-w-screen-xl mx-auto flex justify-center space-x-8">
              {categories[activeCategory].subcategories.map((subcategory, idx) => (
                <div key={idx} className="hover:underline cursor-pointer">
                  {subcategory}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
