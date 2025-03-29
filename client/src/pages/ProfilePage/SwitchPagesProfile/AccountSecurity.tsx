import { useSelector } from "react-redux";
import SideBarProfile from "../SideBarProfile";
import { RootState } from "@/redux/store";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useState } from "react";
import DialogMultiFactorAuth from "./DialogMultiFactorAuth";
import DialogChangeEmail from "./DialogChangeEmail";

const AccountSecurity = () => {
  const email = useSelector((state: RootState) => state?.user?.email);
  const isAuthEnabled = useSelector((state: RootState) => state?.user?.isAuthActivated);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);

  const handleChangeEmail = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const handleAuth = () => {
    setAuthOpen((prev) => !prev);
  };

  return (
    <>
      <form className="w-full">
        <div className="flex w-full items-start justify-center border border-borderGrayColor py-[1em]">
          <div className="flex w-full flex-col items-center">
            <h2 className="font-sans font-extrabold">Account</h2>
            <p className="mb-[1em]">Edit your account settings and change your password here.</p>
            <hr className="w-full" />
            <div className="w-[450px] flex-col py-[1.5em]">
              <label htmlFor="email" className="font-sans font-extrabold">
                Email:
              </label>
              <div className="flex w-full items-center justify-center gap-[0.6em]">
                <div className="mt-[0.5em] w-full border border-gray-400 bg-white p-[1.1em] text-black placeholder:text-courseNameColorTxt focus:bg-white focus:text-black">
                  <p>
                    Your email address is <span className="font-sans font-extrabold">{email}</span>
                  </p>
                </div>
                <div
                  onClick={handleChangeEmail}
                  className="mt-[0.5em] cursor-pointer rounded-[0.3em] border border-purple-700 p-[0.9em] px-[1em] hover:bg-purpleHoverBtn"
                >
                  <MdOutlineModeEditOutline size={24} style={{ color: "border-purple-700" }} />
                </div>
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex w-[450px] flex-col items-start gap-[1.3em] py-[1.5em]">
              <input
                required
                type="text"
                id="new-password"
                name="new-password"
                className="w-full overflow-hidden rounded-[0.3em] border border-gray-400 bg-white p-[0.5em] focus-within:border-btnColor focus-within:ring-1 focus-within:ring-btnColor hover:bg-gray-100"
                placeholder={"Enter new password"}
              />
              <input
                required
                type="text"
                id="re-type-password"
                name="re-type-password"
                className="w-full overflow-hidden rounded-[0.3em] border border-gray-400 bg-white p-[0.5em] focus-within:border-btnColor focus-within:ring-1 focus-within:ring-btnColor hover:bg-gray-100"
                placeholder={"Re-type new password"}
              />
              <button
                className="rounded-[0.3em] bg-btnColor p-[0.8em] font-sans font-extrabold text-white hover:bg-purple-600"
                type="submit"
              >
                Change password
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-[320px] w-full items-start justify-center border-r p-[1em]">
          <div className="flex w-[450px] items-start justify-start py-[1em]">
            <div className="flex flex-col items-start justify-start gap-[0.5em] border-gray-600 p-[1em] shadow-alertAlgoInfo">
              <b>Multi-factor Authentication</b>
              <p>
                Increase your account security by requiring that a code emailed to you be entered
                when you log in. For more information on how multi-factor authentication works,
                refer to our{" "}
                <span className="font-medium text-purple-900 underline">Help Center article.</span>
              </p>
              <button
                onClick={handleAuth}
                className="rounded-[0.3em] bg-btnColor p-[0.8em] font-sans font-extrabold text-white hover:bg-purple-600"
              >
                {isAuthEnabled ? "Disable" : "Enable"}
              </button>
            </div>
          </div>
        </div>
        <hr />
      </form>
      <DialogChangeEmail isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <DialogMultiFactorAuth isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen} />
    </>
  );
};

export default AccountSecurity;
