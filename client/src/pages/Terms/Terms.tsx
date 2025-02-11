import { useState, useEffect } from "react";
import SideBarTerms from "./SideBarTerms";
import Terms_of_use from "./TermsPages/TermsOfUse";
import Instructor from "./TermsPages/Instructor";
import Intellectual from "./TermsPages/Intellectual";
import Leadership from "./TermsPages/Leadership";
import Pro_terms from "./TermsPages/ProTerms";
import Launch from "./TermsPages/Launch";
import Business_statment from "./TermsPages/BusinessStatement";
import Affiliate from "./TermsPages/Affiliate";
import Privacy_policy2 from "./TermsPages/PrivacyPolicy2";
import Master from "./TermsPages/Master";
import ApiAgreement from "./TermsPages/ApiAgreement";
import { useNavigate } from "react-router-dom";


// Adicione os outros componentes conforme necessário
const Terms = () => {
  const [selectedPage, setSelectedPage] = useState("Terms of Use"); // Estado inicial
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPage === "Pricing and Promotions Policy") {
      navigate("/terms/promotions", { replace: true });
    }
  }, [selectedPage, navigate]);

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
                return <ApiAgreement />;
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
            default:
                return <Terms_of_use />;
        }
    };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <SideBarTerms
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
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
