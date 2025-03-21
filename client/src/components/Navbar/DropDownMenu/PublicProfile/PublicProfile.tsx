import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PublicProfile = () => {
  const fullName = useSelector((state: RootState) => state?.user.fullName);
  const profilePic = useSelector((state: RootState) => state?.user.profilePic);

  const [firstWord, secondWord] = fullName.split(" ");
  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div className="text-white">
      <div className="bg-[#1d1e27] px-[4em] py-[4em]">
        <h1 className="ml-[2em] text-[2.5em]">{fullName}</h1>
      </div>
      <div className="w-min bg-white p-[5em] text-center">
        {/* // Temp leave it not working I dont have power to know why */}
        {/* <img
          src={profilePic}
          alt="Profile image of user"
          className="rounded-[100em] w-full h-full object-cover z-[100]"
        /> */}
        <div
          className={`relative flex w-full items-center justify-center rounded-[100em] bg-black p-[1em] text-[4em]`}
        >
          <b className="absolute text-white">{shortcutName}</b>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
