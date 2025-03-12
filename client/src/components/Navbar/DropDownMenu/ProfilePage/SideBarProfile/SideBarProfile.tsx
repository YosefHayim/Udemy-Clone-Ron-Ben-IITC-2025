import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideBarProfile = () => {
  const fullName = useSelector((state: RootState) => state?.user?.fullName);
  const profilePic = useSelector((state: RootState) => state?.user?.profilePic);
  const cookie = useSelector((state: RootState) => state?.user?.cookie);

  const location = useLocation();

  if (cookie && cookie.length < 20) {
    return <div></div>;
  }

  const [firstWord, secondWord] = fullName.split(" ");
  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div className="w-56 bg-white border-l border-b border-t border-r border-borderGrayColor">
      {/* Picture & Name */}
      <div className="p-6 ">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-[8rem] h-[8rem] rounded-full text-white text-4xl font-bold">
            <ProfilePic
              customTextSize={`text-4xl`}
              size={`w-[3em] h-[3em]`}
              shortcutName={shortcutName}
              profilePic={profilePic}
              isBig={true}
              isHover={false}
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">{fullName}</h2>
          </div>
        </div>
      </div>
      {/* Profile Nav_Side_Bar */}
      <nav className="mt-6 ">
        <ul className="space-y-2">
          <li>
            <Link
              to="/user/public-profile"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/public-profile"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              View public Profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-profile"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/edit-profile"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/photo"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/photo"
                  ? "bg-[#9194AC] text-white"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Photo
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-account"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/edit-account"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Account Security
            </Link>
          </li>
          <li>
            <Link
              to="/user/manage-subscriptions"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/manage-subscriptions"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Subscriptions
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-payment-methods/"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/edit-payment-methods/"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Payment methods
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-privacy"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/edit-privacy"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-notifications/"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/edit-notifications/"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Notification Preferences
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-api-clients/"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/edit-api-clients/"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              API clients
            </Link>
          </li>
          <li>
            <Link
              to="/user/close-account"
              className={`block py-2 px-6 font-medium cursor ${
                location.pathname === "/user/close-account"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-[#9194ac] hover:text-white"
              }`}
            >
              Close account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarProfile;
