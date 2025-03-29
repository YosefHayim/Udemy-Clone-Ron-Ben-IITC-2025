import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountSecurity from "./SwitchPagesProfile/AccountSecurity";
import ApiClients from "./SwitchPagesProfile/ApiClients";
import CloseAccount from "./SwitchPagesProfile/CloseAccount";
import NotificationPreferences from "./SwitchPagesProfile/NotificationPreferences";
import Photo from "./SwitchPagesProfile/Photo"
import Privacy from "./SwitchPagesProfile/Privacy";
import SideBarProfile from "./SideBarProfile";
import ProfileMain from "./SwitchPagesProfile/ProfileMain";

const ProfilePage = () => {

    const [selectedPage, setSelectedPage] = useState("Profile"); // Estado inicial
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedPage === "Subscription") { navigate("/user/manage-subscriptions", { replace: true }) };
        if (selectedPage === "View public profile") { navigate("/user/public-profile", { replace: true }) };
        if (selectedPage === "Payment methods") { navigate("/user/payment-methods", { replace: true }) };
    }, [selectedPage, navigate]);

    const renderComponent = () => {
        switch (selectedPage) {
            case "Photo": return <Photo />;
            case "Account Security": return <AccountSecurity />;
            case "Profile": return <ProfileMain />;
            case "Privacy": return <Privacy />;
            case "Notification Preferences": return <NotificationPreferences />;
            case "API Clients": return <ApiClients />;
            case "Close Account": return <CloseAccount />;
            default: return <ProfileMain />
        }
    }
    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar à esquerda */}
                <div className="w-64">
                    <SideBarProfile
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>

                {/* Conteúdo principal */}
                <div
                    className="custom-scrollbar h-screen flex-1 overflow-y-scroll px-[12rem]"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {renderComponent()}
                </div>
            </div>
        </>

    )
}

export default ProfilePage