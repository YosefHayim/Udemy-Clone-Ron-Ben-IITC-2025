import NavbarPersonalized from "./NavbarPersonalized/NavbarPersonalized";
import FooterPersonalized from "./FooterPersonalized/FooterPersonalized";
import { useContext, useEffect, useState } from "react";
import { personalizeContent } from "@/routes/AppRoutes";
import PersonalizeFieldP1 from "./PersonalizeFieldP1/PersonalizeFieldP1";
import OccupationP2 from "./OccupationP2/OccupationP2";
import SkillsP3 from "./SkillsP3/SkillsP3";

const PersonalizeField = () => {
  const [loading, setLoading] = useState(true);
  document.title = "Select Field | Udemy";

  const personalizeTracking = useContext(personalizeContent);
  if (!personalizeTracking) throw new Error("No personalize tracking provided");
  const [personalizeData, setPersonalizeData] = personalizeTracking;

  useEffect(() => {}, [personalizeData]);

  return (
    <div>
      <div>
        <NavbarPersonalized />
        {personalizeData.currentPage === 1 ? <PersonalizeFieldP1 /> : ""}
        {personalizeData.currentPage === 2 ? <OccupationP2 /> : ""}
        {personalizeData.currentPage === 3 ? <SkillsP3 /> : ""}
        <FooterPersonalized />
      </div>
    </div>
  );
};

export default PersonalizeField;
