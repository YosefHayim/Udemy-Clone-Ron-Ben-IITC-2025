import { createContext, useState, ReactNode } from "react";

interface PersonalizeData {
  currentPage: number;
  fieldLearning: string;
  managePeople: boolean;
  occupation: string;
  progressBar: number;
}

export const personalizeContent = createContext<
  [PersonalizeData, React.Dispatch<React.SetStateAction<PersonalizeData>>]
>([
  {
    currentPage: 1,
    fieldLearning: "",
    managePeople: false,
    occupation: "",
    progressBar: 25,
  },
  () => {},
]);

export const PersonalizeProvider = ({ children }: { children: ReactNode }) => {
  const [personalizeData, setPersonalizeData] = useState<PersonalizeData>({
    currentPage: 1,
    fieldLearning: "",
    managePeople: false,
    occupation: "",
    progressBar: 25,
  });

  return (
    <personalizeContent.Provider value={[personalizeData, setPersonalizeData]}>
      {children}
    </personalizeContent.Provider>
  );
};
