import NavbarPersonalized from "./NavbarPersonalized/NavbarPersonalized";
import FooterPersonalized from "./FooterPersonalized/FooterPersonalized";
import { useContext, useEffect } from "react";
import PersonalizeFieldP1 from "./PersonalizeFieldP1/PersonalizeFieldP1";
import OccupationP2 from "./OccupationP2/OccupationP2";
import SkillsP3 from "./SkillsP3/SkillsP3";
import CertificationsP4 from "./CertificationsP4/CertificationsP4";
import { personalizeContent } from "@/contexts/PersonalizeContext";

const PersonalizeField = () => {
  const personalizeTracking = useContext(personalizeContent);
  if (!personalizeTracking) throw new Error("No personalize tracking provided");
  const [personalizeData, setPersonalizeData] = personalizeTracking;

  useEffect(() => {}, [personalizeData]);

  return (
    <div className="text-base">
      <div>
        <NavbarPersonalized />
        {personalizeData.currentPage === 1 ? <PersonalizeFieldP1 /> : ""}
        {personalizeData.currentPage === 2 ? <OccupationP2 /> : ""}
        {personalizeData.currentPage === 3 ? <SkillsP3 /> : ""}
        {personalizeData.currentPage === 4 ? <CertificationsP4 /> : ""}
        <FooterPersonalized />
      </div>
    </div>
  );
};

export default PersonalizeField;
