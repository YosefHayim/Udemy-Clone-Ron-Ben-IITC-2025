import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import DropdownMenu from "../DropDownMenu/DropDownMenu";
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { useState } from "react";

const Profile = () => {
  const fullName = useSelector((state: RootState) => state?.user.fullName);
  const profilePic = useSelector((state: RootState) => state?.user.profilePic);
  const [showDropDown, setShowDropDown] = useState(false);
  const [firstWord, secondWord] = fullName ? fullName.split(" ") : ["", ""];

  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") + (secondWord?.[0]?.toUpperCase() || "");

  return (
    <div
      className="group relative px-[0.2rem] pr-[1rem]"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className="cursor-pointer">
        <ProfilePic
          shortcutName={shortcutName}
          profilePic={profilePic}
          isBig={true}
          isHover={true}
          size="h-[2rem] w-[2rem]"
          customTextSize="text-[0.9rem]"
        />
      </div>

      {showDropDown && (
        <>
          <div className="absolute h-5 w-full bg-transparent" />
          <div className="absolute right-0 top-[1.8em] w-full">
            <DropdownMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
