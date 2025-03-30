import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const SideBarProfile = ({ selectedPage, setSelectedPage }) => {
  const fullName = useSelector((state: RootState) => state?.user?.fullName);
  const profilePic = useSelector((state: RootState) => state?.user?.profilePic);
  const isUserLoaded = useSelector((state: RootState) => state?.user?.isUserLoaded);
  const user = useSelector((state: RootState) => state.user);
  console.log("🔍 user state in SideBarProfile:", user);

  console.log("👁️ isUserLoaded:", isUserLoaded);
  console.log("👤 fullName:", fullName);
  console.log("🖼️ profilePic:", profilePic);

  console.log("fullName:", fullName);
  console.log("profilePic:", profilePic);

  if (!isUserLoaded) {
    console.log("⏳ Esperando carregar usuário...");
    return null;
  }

  // ...resto do código

  // 🛡️ Quebra segura do nome
  const nameParts = fullName.split(" ");
  const firstWord = nameParts[0] || "";
  const secondWord = nameParts[1] || "";
  const shortcutName = firstWord[0] + (secondWord[0] || "");

  const menuItems = [
    "View public profile",
    "Profile",
    "Photo",
    "Account Security", // ✅ maiúscula igual no switch
    "Subscriptions", // ✅ igual no switch
    "Payment Methods", // ✅ igual no switch
    "Privacy",
    "Notification Preferences",
    "API Clients",
    "Close Account",
  ];

  return (
    <div className="w-56 border-b border-l border-r border-t border-borderGrayColor bg-red-500">
      {/* Picture & Name */}
      <div className="p-6 ">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-[8rem] w-[8rem] items-center justify-center rounded-full font-sans text-4xl font-extrabold text-white">
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
            <h2 className="font-sans text-lg font-extrabold text-gray-800">{fullName}</h2>
          </div>
        </div>
      </div>
      <div className="h-screen w-[16rem] bg-white shadow-md">
        {/* Menu lateral */}
        <aside className="w-64">
          <ul className="py-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-6 py-2 text-base font-[790] ${
                  selectedPage === item
                    ? "opacity-86 bg-black text-white"
                    : "text-courseNameColorTxt text-opacity-80 hover:text-black"
                }`}
                onClick={() => setSelectedPage(item)} // Atualiza a página ativa
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      {/* Profile Nav_Side_Bar
      <nav className="mt-6 ">
        <ul className="space-y-2">
          <li>
            <Link
              to="/user/public-profile"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/public-profile"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              View public Profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-profile"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/edit-profile"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/photo"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/photo"
                  ? "bg-gray-400 text-white"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Photo
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-account"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/edit-account"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Account Security
            </Link>
          </li>
          <li>
            <Link
              to="/user/manage-subscriptions"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/manage-subscriptions"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Subscriptions
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-payment-methods/"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/edit-payment-methods/"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Payment methods
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-privacy"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/edit-privacy"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-notifications/"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/edit-notifications/"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Notification Preferences
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-api-clients/"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/edit-api-clients/"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              API clients
            </Link>
          </li>
          <li>
            <Link
              to="/user/close-account"
              className={`cursor block px-6 py-2 font-medium ${
                location.pathname === "/user/close-account"
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white"
              }`}
            >
              Close account
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default SideBarProfile;
