import { useState } from "react";
import SideBarTerms from "./SideBarTerms";
import TermsOfUse from "./TermsPages/TermsOfUse";
import Instructor from "./TermsPages/Instructor";
import Intellectual from "./TermsPages/Intellectual";
import Leadership from "./TermsPages/Leadership";
import Pro_terms from "./TermsPages/ProTerms";
import Launch from "./TermsPages/Launch";
import Promotions from "./TermsPages/Promotions";
import ApiAgreement from "./TermsPages/ApiAgreement";
import Affiliate from "./TermsPages/Affiliate";
import PrivacyPolicy2 from "./TermsPages/PrivacyPolicy2";
import Master from "./TermsPages/Master";
import BusinessStatement from "./TermsPages/BusinessStatement";

// Adicione os outros componentes conforme necessário
const Terms = () => {
  const [selectedPage, setSelectedPage] = useState("Terms of Use"); // Estado inicial

  // Função que retorna o componente correspondente
  const renderComponent = () => {
    switch (selectedPage) {
      case "Terms of Use":
        return <TermsOfUse />;
      case "Privacy Policy":
        return <PrivacyPolicy2 />;
      case "Intellectual Property Policy":
        return <Intellectual />;
      case "Udemy API Agreement":
        return <ApiAgreement />;
      case "Master Services Agreement":
        return <Master />;
      case "Udemy Business Privacy Statement":
        return <BusinessStatement />;
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
