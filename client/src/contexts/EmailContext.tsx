import { createContext, useState, ReactNode } from "react";

export const emailContext = createContext<
  [
    string,
    React.Dispatch<React.SetStateAction<string>>,
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ]
>(["", () => {}, "", () => {}]);

export const EmailProvider = ({ children }: { children: ReactNode }) => {
  const [emailUser, setEmailUser] = useState("");
  const [userFullName, setUserFullName] = useState("");

  return (
    <emailContext.Provider value={[emailUser, setEmailUser, userFullName, setUserFullName]}>
      {children}
    </emailContext.Provider>
  );
};
