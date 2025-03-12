import { useSelector } from "react-redux";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { RootState } from "@/redux";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useState } from "react";
import DialogMultiFactorAuth from "./DialogMultiFactorAuth/DialogMultiFactorAuth";
import DialogChangeEmail from "./DialogChangeEmail/DialogChangeEmail";

const AccountSecurity = () => {
  const email = useSelector((state: RootState) => state?.user?.email);
  const isAuthEnabled = useSelector(
    (state: RootState) => state?.user?.isAuthActivated
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);

  const handleChangeEmail = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const handleAuth = () => {
    setAuthOpen((prev) => !prev);
  };

  return (
    <div className="flex p-[4.5em]">
      <SideBarProfile />
      <form className="w-full">
        <div className="py-[1em] flex items-start justify-center w-full border border-borderGrayColor">
          <div className="w-full flex flex-col items-center">
            <h2 className="font-bold">Account</h2>
            <p className="mb-[1em]">
              Edit your account settings and change your password here.
            </p>
            <hr className="w-full" />
            <div className="w-[450px] flex-col py-[1.5em]">
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <div className="flex items-center justify-center gap-[0.6em] w-full">
                <div className="mt-[0.5em] border w-full p-[1.1em] bg-white text-black focus:bg-white focus:text-black border-gray-400 placeholder:text-courseNameColorTxt">
                  <p>
                    Your email address is{" "}
                    <span className="font-bold">{email}</span>
                  </p>
                </div>
                <div
                  onClick={handleChangeEmail}
                  className="hover:bg-purpleHoverBtn cursor-pointer border px-[1em] p-[0.9em] mt-[0.5em] border-purple-700 rounded-[0.3em]"
                >
                  <MdOutlineModeEditOutline
                    size={24}
                    style={{ color: "border-purple-700" }}
                  />
                </div>
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col items-start w-[450px] py-[1.5em] gap-[1.3em]">
              <input
                required
                type="text"
                id="new-password"
                name="new-password"
                className="hover:bg-gray-100 border border-gray-400 rounded-[0.3em] p-[0.5em] w-full overflow-hidden bg-white focus-within:border-[#6d28d2] focus-within:ring-1 focus-within:ring-[#6d28d2]"
                placeholder={"Enter new password"}
              />
              <input
                required
                type="text"
                id="re-type-password"
                name="re-type-password"
                className="hover:bg-gray-100 border border-gray-400 rounded-[0.3em] p-[0.5em] w-full overflow-hidden bg-white focus-within:border-[#6d28d2] focus-within:ring-1 focus-within:ring-[#6d28d2]"
                placeholder={"Re-type new password"}
              />
              <button
                className="font-bold p-[0.8em] rounded-[0.3em] bg-btnColor hover:bg-purple-600 text-white"
                type="submit"
              >
                Change password
              </button>
            </div>
          </div>
        </div>
        <div className="h-[320px] border-r w-full flex items-start justify-center p-[1em]">
          <div className="flex w-[450px] items-start justify-start py-[1em]">
            <div className="gap-[0.5em] flex flex-col items-start justify-start border-gray-600 shadow-alertAlgoInfo p-[1em]">
              <b>Multi-factor Authentication</b>
              <p>
                Increase your account security by requiring that a code emailed
                to you be entered when you log in. For more information on how
                multi-factor authentication works, refer to our{" "}
                <span className="underline text-purple-900 font-medium">
                  Help Center article.
                </span>
              </p>
              <button
                onClick={handleAuth}
                className="font-bold p-[0.8em] rounded-[0.3em] bg-btnColor hover:bg-purple-600 text-white"
              >
                {isAuthEnabled ? "Disable" : "Enable"}
              </button>
            </div>
          </div>
        </div>
        <hr />
      </form>
      <DialogChangeEmail
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
      <DialogMultiFactorAuth
        isAuthOpen={isAuthOpen}
        setAuthOpen={setAuthOpen}
      />
    </div>
  );
};

export default AccountSecurity;
