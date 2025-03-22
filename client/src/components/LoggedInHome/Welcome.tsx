import { useSelector } from "react-redux";
import ProfilePic from "../ProfilePic/ProfilePic";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";

const Welcome = () => {
  const fullName = useSelector((state: RootState) => state?.user.fullName);
  const profilePic = useSelector((state: RootState) => state?.user.profilePic);
  const headline = useSelector((state: RootState) => state?.user.headline);
  const cookie = useSelector((state: RootState) => state.user.cookie);

  if (!cookie) {
    return <div></div>;
  }

  const [firstWord, secondWord] = fullName?.split(" ") || "";

  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div className="flex items-center space-x-4 bg-white p-5">
      <ProfilePic
        isHover={false}
        shortcutName={shortcutName}
        profilePic={profilePic}
        isBig={true}
      />
      <div>
        <h2 className="font-sans font-sans text-2xl font-extrabold">
          Welcome back, {fullName}
        </h2>
        <div className="flex flex-row items-center justify-start gap-[0.5em]">
          <p>{headline}</p>
          <Link
            to="/personalize/field"
            className="rounded-[0.3em] p-[0.3em] font-sans font-extrabold text-purple-600 underline hover:bg-purpleHoverBtn"
          >
            Edit occupation and interests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
