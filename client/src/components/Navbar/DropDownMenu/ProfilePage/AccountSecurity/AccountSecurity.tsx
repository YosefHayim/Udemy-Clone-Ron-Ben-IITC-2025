import { useSelector } from "react-redux";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { RootState } from "@/redux";
import { MdOutlineModeEditOutline } from "react-icons/md";

const AccountSecurity = () => {
  const email = useSelector((state: RootState) => state.user.email);

  return (
    <div className="flex p-[4.5em]">
      <SideBarProfile />
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
            <div className="flex items-center justify-center gap-[0.5em] w-full">
              <input
                type="email"
                className="w-full p-[0.7em] bg-white text-black focus:bg-white focus:text-black borderGrayColorborder border-gray-400 placeholder:text-courseNameColorTxt focus:border-purple-800"
                placeholder={`Your email address is ${email}`}
              />
              <button className="focus:outline-none">
                <MdOutlineModeEditOutline size={24} />
              </button>
            </div>
          </div>
          <hr className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AccountSecurity;
