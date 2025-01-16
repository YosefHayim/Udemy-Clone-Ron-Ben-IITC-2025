import { useSelector } from "react-redux";
import ProfilePic from "../ProfilePic/ProfilePic";
import Cookies from "js-cookie";

const Welcome = () => {
  const fullName = useSelector((state) => state.user.fullName);
  const profilePic = useSelector((state) => state.user.profilePic);
  const bio = useSelector((state) => state.user.bio);
  const cookie = Cookies.get("cookie");

  if (cookie.length < 20) {
    return <div></div>;
  }

  const [firstWord, secondWord] = fullName.split(" ");

  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div className="flex items-center space-x-4 bg-white p-6">
      <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
      <div>
        <h2 className="text-2xl font-bold">Welcome back, {fullName}</h2>
        <div className="flex flex-row items-start justify-start gap-[0.5em]">
          <p>{bio}</p>
          <a href="#" className="text-purple-600 underline">
            Add occupation and interests
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
