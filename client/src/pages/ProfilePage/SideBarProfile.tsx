import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const SideBarProfile = ({ selectedPage, setSelectedPage }) => {
  const fullName = useSelector((state: RootState) => state?.user?.fullName);
  const profilePic = useSelector((state: RootState) => state?.user?.profilePic);

  const nameParts = fullName.split(" ");
  const firstWord = nameParts[0] || "";
  const secondWord = nameParts[1] || "";
  const shortcutName = firstWord[0] + (secondWord[0] || "");

  const menuItems = [
    "View public profile",
    "Profile",
    "Photo",
    "Account Security",
    "Subscriptions",
    "Payment Methods",
    "Privacy",
    "Notification Preferences",
    "API Clients",
    "Close Account",
  ];

  return (
    <div className="w-46  border-borderGrayColor">
      {/* Picture & Name */}
      <div className="flex flex-col items-center space-y-2">
        <div className="flex h-[8rem] pt-6 w-[8rem] items-center justify-center rounded-full font-sans text-4xl font-extrabold text-white">
          <ProfilePic
            customTextSize={`text-4xl`}
            size={`w-[3.4em] h-[3.4em]`}
            shortcutName={shortcutName}
            profilePic={profilePic}
            isBig={true}
            isHover={false}
          />
        </div>
        <div>
          <h2 className="font-sans  pt-3 text-lg font-extrabold text-gray-800">{fullName}</h2>
        </div>
      </div>

      {/* menu pages */}
      <div className="w-[18rem]  bg-white">
        {/* Menu lateral */}
        <aside className="w-[14rem]">
          <ul className="py-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-6 py-1 text-[0.95rem] font-medium ${
                  selectedPage === item
                    ? "opacity-86 bg-[#9194AC] text-white"
                    : "text-black text-opacity-80 hover:bg-[#9194AC] hover:text-white"
                }`}
                onClick={() => setSelectedPage(item)} // Atualiza a página ativa
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default SideBarProfile;
