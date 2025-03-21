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
      } font-Sans rounded-[0.4em] p-[1em] px-[0.6em] py-[0.2em] font-normal text-[#020202] hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300`}
    >
      <Avatar className={`${isBig ? `${size}` : ""}`}>
        <AvatarImage
          src={`${baseUrl}${profilePic}`}
          className="rounded-[100em]"
        />
        <AvatarFallback
          className={`${
            isBig ? "text-2xl" : "text-1xl"
          } bg-black font-bold text-white ${customTextSize}`}
        >
          {shortcutName.toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePic;
