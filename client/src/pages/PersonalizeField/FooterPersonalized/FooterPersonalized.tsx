import { personalizeContent } from "@/routes/AppRoutes";
import { useContext, useEffect } from "react";

const FooterPersonalized = () => {
  const personalizeTracking = useContext(personalizeContent);
  if (!personalizeTracking) throw new Error("No personalize tracking provided");
  const [personalizeData, setPersonalizeData] = personalizeTracking;

  const handleForward = () => {
    setPersonalizeData((prev: any) => ({
      ...prev,
      currentPage: prev.currentPage + 1,
      progressBar: (prev.progressBar += 25),
    }));
  };

  const handleBackward = () => {
    if (personalizeData.currentPage > 1) {
      setPersonalizeData((prev: any) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
        progressBar: (prev.progressBar = 25),
      }));
    }
  };

  useEffect(() => {}, [personalizeData]);

  return (
    <div className="absolute bottom-0 p-[1em] w-full bg-white shadow-personalizedFooterShadow flex flex-row items-center justify-between">
      {personalizeData.currentPage > 1 ? (
        <div>
          <button
            onClick={handleBackward}
            className="font-bold px-[0.5em] py-[1em] text-black rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4"
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="text-end w-full">
        <button
          onClick={handleForward}
          className="font-bold px-6 py-[1em] bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FooterPersonalized;
