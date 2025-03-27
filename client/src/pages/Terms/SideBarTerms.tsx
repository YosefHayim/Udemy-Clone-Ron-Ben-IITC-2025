const SideBarTerms = ({ setSelectedPage, selectedPage }) => {
  const menuItems = [
    'Terms of Use',
    'Privacy Policy',
    'Intellectual Property Policy',
    'Udemy API Agreement',
    'Master Services Agreement',
    'Udemy Business Privacy Statement',
    'Instructor Terms',
    'Affiliate Terms & Conditions',
    'Udemy Business Leadership Academy Terms & Conditions',
    'Udemy Business Pro Terms & Conditions',
    'Launch Services',
    'Pricing and Promotions Policy',
  ];

  return (
    <div className="h-screen w-[16rem] bg-white shadow-md">
      {/* Menu lateral */}
      <aside className="w-64">
        <ul className="py-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer px-6 py-2 text-base font-[790] ${
                selectedPage === item
                  ? 'opacity-86 bg-black text-white'
                  : 'text-courseNameColorTxt text-opacity-80 hover:text-black'
              }`}
              onClick={() => setSelectedPage(item)} // Atualiza a página ativa
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SideBarTerms;
