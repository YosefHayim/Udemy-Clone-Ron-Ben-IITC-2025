import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoginBtn from "../Navbar/LoginBtn/LoginBtn";
import SignupBtn from "../Navbar/SignupBtn/SignupBtn";

const ProfilePic = ({ shortcutName, profilePic }) => {
  if (!shortcutName && !profilePic) {
    return (
      <div className="flex flex-row gap-[1em]">
        <LoginBtn />
        <SignupBtn />
      </div>
    );
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
