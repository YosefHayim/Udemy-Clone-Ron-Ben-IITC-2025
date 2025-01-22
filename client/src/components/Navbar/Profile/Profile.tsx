import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index"; // Import RootState type for Redux
import DropdownMenu from "../DropDownMenu/DropDownMenu"; // Importa o componente DropdownMenu
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/SignupBtn";
import Language from "../Language/Language";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setCookie } from "@/redux/slices/userSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);
  const cookie = useSelector((state: RootState) => state.user.cookie) || "";

  useEffect(() => {
    const currentCookie = Cookies.get("cookie");
    if (currentCookie && currentCookie !== cookie) {
      dispatch(setCookie(currentCookie));
    }
  }, [cookie]);

  // Ensure fullName is defined before splitting
  const [firstWord, secondWord] = fullName ? fullName.split(" ") : ["", ""];

  // Safely generate the shortcut name
  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") +
    (secondWord?.[0]?.toUpperCase() || "");

  return (
    <div>
      {cookie.length > 1 ? (
        <div className="relative group">
          {/* If no profilePic, fallback to initials */}
          <div className="pt-[1em]">
            <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
          </div>
          <div className="pb-[1em]">
            <DropdownMenu />
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-[1em]">
          <LoginBtn />
          <SignupBtn />
          <Language />
        </div>
      )}
    </div>
  );
};

export default Profile;
