import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index";
import DropdownMenu from "../DropDownMenu/DropDownMenu";
import ProfilePic from "@/components/ProfilePic/ProfilePic";

const Profile: React.FC<{ cookie: string }> = ({ cookie }) => {
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);

  const [firstWord, secondWord] = fullName ? fullName.split(" ") : ["", ""];

  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") +
    (secondWord?.[0]?.toUpperCase() || "");

  return (
    <div>
      {cookie.length > 1 && (
        <div className="relative group">
          <div>
            <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
          </div>
          <div>
            <DropdownMenu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
