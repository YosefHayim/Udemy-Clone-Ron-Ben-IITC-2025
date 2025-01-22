import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { RootState } from "@/redux";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBarProfile = () => {
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);
  const bio = useSelector((state: RootState) => state.user.bio);
  const cookie: string | any = Cookies.get("cookie");

  if (cookie && cookie.length < 20) {
    return <div></div>;
  }

  const [firstWord, secondWord] = fullName.split(" ");

  const shortcutName = (firstWord?.[0] || "") + (secondWord?.[0] || "");

  return (
    <div className="w-64 bg-white border-l border-b border-t border-gray-300">
      <div className="p-6 ">
        <div className="flex items-center space-x-4">
          <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
          <div>
            <h2 className="font-bold text-lg text-gray-800">{fullName}</h2>
            <Link to="/public-profile" className="text-indigo-600 text-sm">
              View public profile
            </Link>
          </div>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link
              to="/profile"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/photo"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Photo
            </Link>
          </li>
          <li>
            <Link
              to="/account-security"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Account Security
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Subscriptions
            </Link>
          </li>
          <li>
            <Link
              to="/payment-methods"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Payment methods
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              to="/notification-preferences"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Notification Preferences
            </Link>
          </li>
          <li>
            <Link
              to="/api-clients"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              API clients
            </Link>
          </li>
          <li>
            <Link
              to="/close-account"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
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
