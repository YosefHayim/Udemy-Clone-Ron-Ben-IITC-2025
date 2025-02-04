import { useState } from "react";
import Side_bar_terms from "./Side_bar_terms";
import Terms_of_use from "./Terms_Pages/Terms_of_use";
import Instructor from "./Terms_Pages/Instructor";
import Intellectual from "./Terms_Pages/Intellectual";
import Leadership from "./Terms_Pages/Leadership";
import Pro_terms from "./Terms_Pages/Pro_terms";
import Launch from "./Terms_Pages/Launch";
import Promotions from "./Terms_Pages/Promotions";
import Business_statment from "./Terms_Pages/Business_statment";
import Affiliate from "./Terms_Pages/Affiliate";
import Privacy_policy2 from "./Terms_Pages/Privacy_policy2";
import Master from "./Terms_Pages/Master";
import API_agreement from "./Terms_Pages/Api_agreement";

// Adicione os outros componentes conforme necessário
const Terms = () => {
    const [selectedPage, setSelectedPage] = useState("Terms of Use"); // Estado inicial

    // Função que retorna o componente correspondente
    const renderComponent = () => {
        switch (selectedPage) {
            case "Terms of Use":
                return <Terms_of_use />;
            case "Privacy Policy":
                return <Privacy_policy2 />;
            case "Intellectual Property Policy":
                return <Intellectual />;
            case "Udemy API Agreement":
                return <API_agreement />;
            case "Master Services Agreement":
                return <Master />;
            case "Udemy Business Privacy Statement":
                return <Business_statment />;
            case "Instructor Terms":
                return <Instructor />;
            case "Affiliate Terms & Conditions":
                return <Affiliate />;
            case "Udemy Business Leadership Academy Terms & Conditions":
                return <Leadership />;
            case "Udemy Business Pro Terms & Conditions":
                return <Pro_terms />;
            case "Launch Services":
                return <Launch />;
            case "Pricing and Promotions Policy":
                return <Promotions />;
            default:
                return <Terms_of_use />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64">
                <Side_bar_terms setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
            </div>

            {/* Área de Conteúdo */}
            <div
                className="flex-1 h-screen overflow-y-scroll custom-scrollbar px-[12rem]"
                style={{
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // IE e Edge
                }}
            >
                {renderComponent()}
            </div>
        </div>
    );
};

export default Terms;
