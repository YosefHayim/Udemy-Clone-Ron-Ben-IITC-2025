import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

const PublicProfile = () => {
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);

  const [firstWord, secondWord] = fullName.split(" ");

  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div>
      <div className="bg-[#1d1e27] text-white p-[2.5em]">
        <h1 className="text-[2.5em] ml-[2em]">{fullName}</h1>
      </div>
      <div className="bg-white p-[5em]">
        <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
      </div>
    </div>
  );
};

export default PublicProfile;
