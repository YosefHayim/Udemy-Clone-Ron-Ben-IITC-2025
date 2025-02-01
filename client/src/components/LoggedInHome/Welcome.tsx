import { useSelector } from "react-redux";
import ProfilePic from "../ProfilePic/ProfilePic";
import { RootState } from "@/redux";
import { Link } from "react-router-dom";

const Welcome = () => {
  const fullName = useSelector((state: RootState) => state.user.fullName) || "";
  const profilePic = useSelector((state: RootState) => state.user.profilePic);
  const bio = useSelector((state: RootState) => state.user.bio);
  const cookie = useSelector((state: RootState) => state.user.cookie) || "";

  if (!cookie) {
    return <div></div>;
  }

  const [firstWord, secondWord] = fullName?.split(" ") || "";

  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div className="flex items-center space-x-4 bg-white p-6">
      <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
      <div>
        <h2 className="text-2xl font-bold">Welcome back, {fullName}</h2>
        <div className="flex flex-row items-start justify-start gap-[0.5em]">
          <p>{bio}</p>
          <Link
            to="/personalize/field"
            className="hover:bg-purpleHoverBtn text-purple-600 underline font-bold p-[0.3em] rounded-[0.3em]"
          >
            Edit occupation and interests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
