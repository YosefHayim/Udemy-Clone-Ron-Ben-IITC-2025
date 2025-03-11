import { useSelector } from "react-redux";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { RootState } from "@/redux";
import { MdOutlineModeEditOutline } from "react-icons/md";

const AccountSecurity = () => {
  const email = useSelector((state: RootState) => state.user.email);

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
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-[0.5em] border w-full p-[1.1em] bg-white text-black focus:bg-white focus:text-black border-gray-400 placeholder:text-courseNameColorTxt"
                  placeholder={`Your email address is`}
                />
                <span className="absolute font-bold right-[37.3%] top-[25.8%]">
                  {email}
                </span>
                <div className="hover:bg-purpleHoverBtn cursor-pointer border p-[0.8em] pb-[1.1em] mt-[0.5em] border-purple-700 rounded-[0.3em]">
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
                type="text"
                id="new-password"
                name="new-password"
                className="rounded-[0.3em] border w-full p-[0.5em] bg-white text-black focus:bg-white focus:text-black border-gray-400 placeholder:text-courseNameColorTxt"
                placeholder={"Enter new password"}
              />
              <input
                type="text"
                id="re-type-password"
                name="re-type-password"
                className="rounded-[0.3em] border w-full p-[0.5em] bg-white text-black focus:bg-white focus:text-black border-gray-400 placeholder:text-courseNameColorTxt"
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
              <button className="font-bold p-[0.8em] rounded-[0.3em] bg-btnColor hover:bg-purple-600 text-white">
                Enable
              </button>
            </div>
          </div>
        </div>
        <hr />
      </form>
    </div>
  );
};

export default AccountSecurity;
