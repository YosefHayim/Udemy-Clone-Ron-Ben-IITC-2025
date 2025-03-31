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
      <form className="w-full mb-4">
        <div className="w-full min-h-screen border-l border-borderGrayColor py-[1em] flex flex-col items-center">

          <div className="flex w-full flex-col items-center">
            {/* Título */}
            <div className="text-center w-full border-gray-300 pb-[0.5em]">
              <h2 className="font-sans text-[1.5rem]" style={{ fontWeight: 700 }}>Account</h2>
              <p className="text-[1rem]" style={{ fontWeight: 500 }}>
                Edit your account settings and change your password here.
              </p>
            </div>

            {/* Linha acima do Email */}
            <hr className="w-full border-t border-gray-300 my-[1em]" />

            {/* Email */}
            <div className="w-full flex-col py-[1em] max-w-[610px]">
              <label htmlFor="email" className="font-sans text-[0.875rem] font-bold" style={{ fontWeight: 600 }}>
                Email:
              </label>
              <div className="flex w-full items-center gap-[1em]">
                <div className="mt-[0.5em] w-full border text-[1rem] border-gray-400 bg-white p-[0.6em] text-black text-opacity-80">
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

            {/* Linha acima do Password */}
            <hr className="w-full border-t border-gray-300 my-[1em]" />

            {/* Password */}
            <div className="w-full max-w-[600px]">
              <b className="font-sans text-[0.875rem] font-bold pt-2 pb-1 text-left block" style={{ fontWeight: 600 }}>
                Password:
              </b>
            </div>
            <div className="flex w-full max-w-[600px] flex-col items-start gap-[1.3em] pb-[1.5em]">
              <input
                required
                type="password"
                id="password"
                name="password"
                className="w-full placeholder:text-gray-600 text-[0.875rem] rounded-[0.3em] border border-gray-400 bg-white p-[0.75em] hover:bg-gray-100 focus:border-btnColor focus:ring-1 focus:ring-btnColor"
                placeholder="Enter current password"
              />
              <input
                required
                type="password"
                id="new-password"
                name="new-password"
                className="w-full text-[0.875rem] placeholder:text-gray-600 rounded-[0.3em] border border-gray-400 bg-white p-[0.75em] hover:bg-gray-100 focus:border-btnColor focus:ring-1 focus:ring-btnColor"
                placeholder="Enter new password"
              />
              <input
                required
                type="password"
                id="re-type-password"
                name="re-type-password"
                className="w-full text-[0.875rem] placeholder:text-gray-600 rounded-[0.3em] border border-gray-400 bg-white p-[0.75em] hover:bg-gray-100 focus:border-btnColor focus:ring-1 focus:ring-btnColor"
                placeholder="Re-type new password"
              />
              <button
                className="rounded-[0.3em] bg-btnColor text-[0.875rem] my-4 p-[0.8em] font-sans font-extrabold text-white hover:bg-purple-600"
                type="submit"
              >
                Change password
              </button>
            </div>

            {/* Linha acima do Multi-factor */}
            <hr className="w-full border-t border-gray-300 my-[1em]" />

            {/* Multi-factor Auth */}
            <div className="mt-2 flex w-full max-w-[600px] text-[1rem] items-start justify-start shadow-2xl">
              <div className="flex flex-col items-start justify-start pl-4 pr-[3rem] gap-[0.5em] border-[1px] border-gray-100 p-[1em] shadow-alertAlgoInfo">
                <b>Multi-factor Authentication</b>
                <p>
                  Increase your account security by requiring that a code emailed to you be entered
                  when you log in. For more information on how multi-factor authentication works,
                  refer to our <span className="font-medium text-purple-800 underline">Help Center article.</span>
                </p>
                <button
                  onClick={handleAuth}
                  className="rounded-[0.3em] bg-btnColor p-[0.8em] my-2 font-sans font-extrabold text-white hover:bg-purple-600"
                >
                  {isAuthEnabled ? "Disable" : "Enable"}
                </button>
              </div>
            </div>
          </div>

          <DialogChangeEmail isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
          <DialogMultiFactorAuth isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen} />
        </div>
      </form>


      <DialogChangeEmail isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <DialogMultiFactorAuth isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen} />
    </>
  );
};

export default AccountSecurity;
