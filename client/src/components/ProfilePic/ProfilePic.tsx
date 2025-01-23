import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePic: React.FC<{ shortcutName: string; profilePic: string }> = ({
  shortcutName,
  profilePic,
}) => {
  return (
    <Avatar>
      <AvatarImage src={profilePic} />
      <AvatarFallback className="bg-black text-white font-bold">
        {shortcutName.toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfilePic;
