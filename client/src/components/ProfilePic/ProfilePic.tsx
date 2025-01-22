import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RootState } from "@/redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePic: React.FC<{ shortcutName: string; profilePic: string }> = ({
  shortcutName,
  profilePic,
}) => {
  const navigate = useNavigate();
  const cookie = useSelector((state: RootState) => state.user.cookie) || "";

  if (!cookie) {
    return navigate("/logout");
  }

  useEffect(() => {}, [cookie]);

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
