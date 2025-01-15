import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index"; // Import RootState type for Redux
import DropdownMenu from "../../DropDownMenu"; // Importa o componente DropdownMenu
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/SignupBtn";
import Language from "../Language/Language";
import Cookies from "js-cookie";

const Profile: React.FC = () => {
  const fullName = useSelector((state) => state.user.fullName);
  const profilePic = useSelector((state) => state.user.profilePic);

  // Ensure fullName is defined before splitting
  const [firstWord, secondWord] = fullName ? fullName.split(" ") : ["", ""];

  // Safely generate the shortcut name
  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") +
    (secondWord?.[0]?.toUpperCase() || "");

  const cookie = Cookies.get("cookie");

  if (!fullName && !profilePic && !cookie) {
    return (
      <div className="flex flex-row gap-[1em]">
        <LoginBtn />
        <SignupBtn />
        <Language />
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* If no profilePic, fallback to initials */}
      <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
      <div className="pb-[1em]">
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Profile;
