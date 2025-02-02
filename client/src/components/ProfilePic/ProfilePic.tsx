import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePic: React.FC<{ shortcutName: string; profilePic: string }> = ({
  shortcutName,
  profilePic,
}) => {
  return (
    <Avatar
      className="text-[#020202] font-normal text-sm font-Sans
    hover:bg-purple-100 hover:text-purple-700 focus:outline-none cursor-pointer
    focus:ring-2 focus:ring-purple-300 p-[0.2em] rounded-[0.4em]"
    >
      <AvatarImage src={profilePic} className="rounded-[100em]" />
      <AvatarFallback className="bg-[#1D1E27] text-white font-bold">
        {shortcutName.toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfilePic;
