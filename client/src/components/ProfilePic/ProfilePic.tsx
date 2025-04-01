import { baseUrl, localhostUrl } from "@/api/configuration";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from "react";

const ProfilePic: React.FC<{
  shortcutName: string;
  profilePic: string;
  isBig: boolean;
  isHover: boolean;
  size: string;
  customTextSize: string;
}> = ({
  shortcutName,
  profilePic,
  isBig = false,
  isHover = true,
  size = "h-[5em] w-[5em]",
  customTextSize = "",
}) => {
  let imageUrl = "";

  if (profilePic.includes("google")) {
    imageUrl = profilePic;
  } else if (profilePic.startsWith("https")) {
    imageUrl = `${baseUrl}${profilePic}`;
  } else {
    imageUrl = `${localhostUrl}${profilePic}`;
  }

  useEffect(() => {}, [imageUrl]);

  return (
    <div
      className={`${
        isHover ? "px-3 hover:bg-purple-100" : ""
      } flex items-center justify-center rounded-[0.4em] py-[0.2em] font-sans font-normal text-[#020202] hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300`}
    >
      <Avatar className={`${isBig ? `${size}` : ""}`}>
        <AvatarImage referrerPolicy="no-referrer" src={imageUrl} className="" />
        <AvatarFallback
          className={`${
            isBig ? "text-2xl" : "text-1xl"
          } bg-black  font-sans font-bold text-white opacity-90 ${customTextSize}`}
        >
          {shortcutName.toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePic;
