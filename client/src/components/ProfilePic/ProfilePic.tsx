import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePic = ({ shortcutName, profilePic }) => {
  if (!shortcutName && !profilePic) {
    return <div>No full name or profile</div>;
  }

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
