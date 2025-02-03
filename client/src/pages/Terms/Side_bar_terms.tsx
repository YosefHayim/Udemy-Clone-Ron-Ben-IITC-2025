const Side_bar_terms = ({ setSelectedPage, selectedPage }) => {
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
        <div className="h-screen bg-white shadow-md">
            {/* Menu lateral */}
            <aside className="w-64">
                <ul className="py-4">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`px-6 py-3 cursor-pointer text-sm font-medium ${
                                selectedPage === item
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:bg-gray-100"
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

export default Side_bar_terms;
