import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountSecurity from "./SwitchPagesProfile/AccountSecurity";
import ApiClients from "./SwitchPagesProfile/ApiClients";
import CloseAccount from "./SwitchPagesProfile/CloseAccount";
import NotificationPreferences from "./SwitchPagesProfile/NotificationPreferences";
import Photo from "./SwitchPagesProfile/Photo";
import Privacy from "./SwitchPagesProfile/Privacy";
import SideBarProfile from "./SideBarProfile";
import ProfileMain from "./SwitchPagesProfile/ProfileMain";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ProfilePage = () => {
  const [selectedPage, setSelectedPage] = useState("Profile");
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  console.log("📦 Redux user state:", user);

  console.log("🧠 Redux user:", user);

  useEffect(() => {
    if (selectedPage === "Subscriptions") {
      navigate("/user/manage-subscriptions", { replace: true });
    }
    if (selectedPage === "View public profile") {
      navigate("/user/public-profile", { replace: true });
    }
    if (selectedPage === "Payment Methods") {
      navigate("/user/edit-payment-methods/", { replace: true });
    }
  }, [selectedPage, navigate]);

  const renderComponent = () => {
    switch (selectedPage) {
      case "Profile":
        return <ProfileMain />;
      case "Photo":
        return <Photo />;
      case "Account Security":
        return <AccountSecurity />;
      case "Privacy":
        return <Privacy />;
      case "Notification Preferences":
        return <NotificationPreferences />;
      case "API Clients":
        return <ApiClients />;
      case "Close Account":
        return <CloseAccount />;
      default:
        return <ProfileMain />;
    }
  };
  return (
    <div className="mx-[12rem] my-6 flex border-[1px] border-gray-300">
      <div className="w-64">
        <SideBarProfile selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <div className="flex-1">
        {" "}
        {/* Removi h-screen e overflow */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default ProfilePage;
