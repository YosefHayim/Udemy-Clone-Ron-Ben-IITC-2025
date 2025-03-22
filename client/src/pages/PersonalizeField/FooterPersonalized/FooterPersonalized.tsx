import updatePersonalizeUserField from "@/api/users/updatePersonalizeField";
import { personalizeContent } from "@/routes/AppRoutes";
import { useMutation } from "@tanstack/react-query";
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
      }));
    }
    if (personalizeData.progressBar > 25) {
      setPersonalizeData((prev: any) => ({
        ...prev,
        progressBar: (prev.progressBar -= 25),
      }));
    }
  };

  useEffect(() => {}, [personalizeData]);

  const mutatePersonalizeData = useMutation({
    mutationFn: updatePersonalizeUserField,
  });

  const handleSubmit = () => {
    mutatePersonalizeData.mutate(personalizeData);
  };

  return (
    <div
      className={`${
        personalizeData.currentPage === 3 ? "relative" : "absolute"
      } bottom-0 z-[1] flex w-full flex-row items-center justify-between bg-white p-[1em] shadow-personalizedFooterShadow`}
    >
      {personalizeData.currentPage > 1 ? (
        <div>
          <button
            onClick={handleBackward}
            className="mr-4 rounded-md px-[0.5em] py-[1em] font-bold text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="w-full text-end">
        {personalizeData.currentPage === 4 ? (
          <button
            onClick={handleSubmit}
            className="mr-4 rounded-md bg-purple-600 px-6 py-[1em] font-bold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleForward}
            className="mr-4 rounded-md bg-purple-600 px-6 py-[1em] font-bold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FooterPersonalized;
