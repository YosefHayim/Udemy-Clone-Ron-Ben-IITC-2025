import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index";
import DropdownMenu from "../DropDownMenu/DropDownMenu";
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { useEffect, useState } from "react";

const Profile: React.FC<{ cookie: string }> = ({ cookie }) => {
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);

  const [firstWord, secondWord] = fullName ? fullName.split(" ") : ["", ""];

  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") +
    (secondWord?.[0]?.toUpperCase() || "");

  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {}, [cookie]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className="cursor-pointer">
        <ProfilePic
          shortcutName={shortcutName}
          profilePic={profilePic}
          isBig={false}
        />
      </div>

      {showDropDown && (
        <>
          <div className="absolute w-full h-5 bg-transparent" />
          <div className="absolute top-[1.8em] right-0 w-full">
            <DropdownMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
