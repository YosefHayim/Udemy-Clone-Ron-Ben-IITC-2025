import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { RootState } from "@/redux";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const SideBarProfile = () => {
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);
  const bio = useSelector((state: RootState) => state.user.bio);
  const cookie: string | any = Cookies.get("cookie");

  if (cookie.length < 20) {
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
            <a href="#" className="text-indigo-600 text-sm">
              View public profile
            </a>
          </div>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Photo
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Account Security
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Subscriptions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Payment methods
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Notification Preferences
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              API clients
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Close account
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarProfile;
