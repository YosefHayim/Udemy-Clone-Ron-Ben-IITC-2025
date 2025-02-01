import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CantFindMyOccupation from "./CantFindMyOccupation/CantFindMyOccupation";
import { useContext, useEffect, useState } from "react";
import { personalizeContent } from "@/routes/AppRoutes";

const OccupationP2 = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const personalizeTracking = useContext(personalizeContent);
  if (!personalizeTracking) throw new Error("No personalize tracking provided");
  const [personalizeData, setPersonalizeData] = personalizeTracking;

  useEffect(() => {}, [personalizeData]);

  return (
    <div>
      <div className={isClicked ? "hidden" : "block"}>
        <div className="w-[500px] text-start p-[2em] ml-[8em] mt-[2em]">
          <div>
            <h1 className="text-[1.5em] mb-[1em]">
              Which occupation are you learning for?
            </h1>
            <b>Data & Analytics occupations</b>
          </div>
          <form className="mt-[1em]">
            <RadioGroup className="flex flex-col gap-4" required={true}>
              <div className="flex flex-row w-full items-start justify-start gap-[4em]">
                <div className="flex flex-col items-start justify-start gap-[1em]">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Business Analyst" />
                    <label>Business Analyst</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Business Intelligence Analyst" />
                    <label>Business Intelligence Analyst</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Data Analyst" />
                    <label>Data Analyst</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Data Engineer" />
                    <label>Data Engineer</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Data Scientist" />
                    <label>Data Scientist</label>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1em]">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Financial Analyst" />
                    <label>Financial Analyst</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="GIS Analyst" />
                    <label>GIS Analyst</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Machine Learning Engineer" />
                    <label>Machine Learning Engineer</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Marketing Analyst" />
                    <label>Marketing Analyst</label>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </form>
          <div className="mt-[1.5em] cursor-pointer">
            <button
              className="underline text-[#6d28d2] bg-none border-none"
              onClick={handleClick}
            >
              I cant find my occupation
            </button>
          </div>
        </div>
      </div>
      <CantFindMyOccupation isClicked={isClicked} setClicked={setClicked} />
    </div>
  );
};

export default OccupationP2;
