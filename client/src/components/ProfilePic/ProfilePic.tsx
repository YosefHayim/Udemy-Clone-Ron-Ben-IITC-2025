import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePic = ({ shortcutName, profilePic }) => {
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
