import { baseUrl } from "@/api/configuration";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <div
      className={`${
        isHover ? "hover:bg-purple-100" : ""
      } p-[1em] text-[#020202] font-normal font-Sans hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 px-[0.6em] py-[0.2em] rounded-[0.4em]`}
    >
      <Avatar className={`${isBig ? `${size}` : ""}`}>
        <AvatarImage
          src={`${baseUrl}${profilePic}`}
          className="rounded-[100em]"
        />
        <AvatarFallback
          className={`${
            isBig ? "text-2xl" : "text-1xl"
          } bg-black text-white font-bold ${customTextSize}`}
        >
          {shortcutName.toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePic;
