import { useSelector } from "react-redux";
import SideBarProfile from "../SideBarProfile";
import { RootState } from "@/redux/store";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useEffect, useState } from "react";
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

  useEffect(() => {}, [email]);

  return (
    <>
      <form className="mb-4 w-full">
        <div className="flex min-h-screen w-full flex-col items-center border-l border-borderGrayColor py-[1em]">
          <div className="flex w-full flex-col items-center">
            {/* Título */}
            <div className="w-full border-gray-300 pb-[0.5em] text-center">
              <h2 className="font-sans text-[1.5rem]" style={{ fontWeight: 700 }}>
                Account
              </h2>
              <p className="text-[1rem]" style={{ fontWeight: 500 }}>
                Edit your account settings and change your password here.
              </p>
            </div>

            {/* Linha acima do Email */}
            <hr className="my-[1em] w-full border-t border-gray-300" />

            {/* Email */}
            <div className="w-full max-w-[610px] flex-col py-[1em]">
              <label
                htmlFor="email"
                className="font-sans text-[0.875rem] font-bold"
                style={{ fontWeight: 600 }}
              >
                Email:
              </label>
              <div className="flex w-full items-center gap-[1em]">
                <div className="mt-[0.5em] w-full border border-gray-400 bg-white p-[0.6em] text-[1rem] text-black text-opacity-80">
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
            <hr className="my-[1em] w-full border-t border-gray-300" />

            {/* Password */}
            <div className="w-full max-w-[600px]">
              <b
                className="block pb-1 pt-2 text-left font-sans text-[0.875rem] font-bold"
                style={{ fontWeight: 600 }}
              >
                Password:
              </b>
            </div>
            <div className="flex w-full max-w-[600px] flex-col items-start gap-[1.3em] pb-[1.5em]">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-[0.3em] border border-gray-400 bg-white p-[0.75em] text-[0.875rem] placeholder:text-gray-600 hover:bg-gray-100 focus:border-btnColor focus:ring-1 focus:ring-btnColor"
                placeholder="Enter current password"
              />
              <input
                type="password"
                id="new-password"
                name="new-password"
                className="w-full rounded-[0.3em] border border-gray-400 bg-white p-[0.75em] text-[0.875rem] placeholder:text-gray-600 hover:bg-gray-100 focus:border-btnColor focus:ring-1 focus:ring-btnColor"
                placeholder="Enter new password"
              />
              <input
                type="password"
                id="re-type-password"
                name="re-type-password"
                className="w-full rounded-[0.3em] border border-gray-400 bg-white p-[0.75em] text-[0.875rem] placeholder:text-gray-600 hover:bg-gray-100 focus:border-btnColor focus:ring-1 focus:ring-btnColor"
                placeholder="Re-type new password"
              />
              <button
                className="my-4 rounded-[0.3em] bg-btnColor p-[0.8em] font-sans text-[0.875rem] font-extrabold text-white hover:bg-purple-600"
                type="submit"
              >
                Change password
              </button>
            </div>

            {/* Linha acima do Multi-factor */}
            <hr className="my-[1em] w-full border-t border-gray-300" />

            {/* Multi-factor Auth */}
            <div className="mt-2 flex w-full max-w-[600px] items-start justify-start text-[1rem] shadow-2xl">
              <div className="flex flex-col items-start justify-start gap-[0.5em] border-[1px] border-gray-100 p-[1em] pl-4 pr-[3rem] shadow-alertAlgoInfo">
                <b>Multi-factor Authentication</b>
                <p>
                  Increase your account security by requiring that a code emailed to you be entered
                  when you log in. For more information on how multi-factor authentication works,
                  refer to our{" "}
                  <span className="font-medium text-purple-800 underline">
                    Help Center article.
                  </span>
                </p>
                <button
                  onClick={handleAuth}
                  className="my-2 rounded-[0.3em] bg-btnColor p-[0.8em] font-sans font-extrabold text-white hover:bg-purple-600"
                >
                  {isAuthEnabled ? "Disable" : "Enable"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <DialogChangeEmail isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
        <DialogMultiFactorAuth isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen} />
      </form>
      <DialogChangeEmail isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <DialogMultiFactorAuth isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen} />
    </>
  );
};

export default AccountSecurity;
