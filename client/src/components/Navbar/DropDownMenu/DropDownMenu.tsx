import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import ProfilePic from "../../ProfilePic/ProfilePic";
import CartCoursesNumber from "../Cart/CartCoursesNumber/CartCoursesNumber";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
import { clearUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux";

const DropdownMenu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isClicked, setClicked] = useState(false);

  const {
    fullName = "",
    profilePic,
    email,
  } = useSelector((state: RootState) => state.user);
  const shortcutName = fullName
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");

  const handleLogout = () => {
    Cookies.remove("cookie");
    dispatch(clearUser());
    navigate("/logout");
  };

  const menuItems = [
    { label: "My learning", to: "/home/my-courses" },
    { label: "My cart", to: "/cart", extra: <CartCoursesNumber /> },
    { label: "Wishlist", to: "/home/my-courses/wishlist", separator: true },
    { label: "Notifications", to: "/instructor/user/view-notifications" },
    { label: "Messages", to: "/message", separator: true },
    { label: "Account settings", to: "/instructor/account/security" },
    { label: "Payment methods", to: "/user/edit-payment-methods/" },
    { label: "Subscriptions", to: "/user/manage-subscriptions/" },
    { label: "Udemy credits", to: "/dashboard/credit-history" },
    {
      label: "Purchase history",
      to: "/dashboard/purchase-history",
      separator: true,
    },
    { label: "Public profile", to: "/user/public-profile" },
    {
      label: "Edit profile",
      to: "/instructor/profile/basic-information/",
      separator: true,
    },
    { label: "Help and support", to: "/support/" },
  ];

  return (
    <div className="absolute right-0 mt-4 w-72 bg-white border shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-[1600]">
      <div className="flex items-center p-4 border-b">
        <Link to="/user/edit-profile">
          <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
        </Link>
        <div className="ml-3">
          <div className="font-bold text-gray-800 hover:text-btnColor">
            {fullName}
          </div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
      </div>
      <ul className="py-2 text-sm">
        {menuItems.map(({ label, to, extra, separator }, index) => (
          <li key={index}>
            <Link
              to={to}
              className=" my-[0.3em] px-4 py-[0.5em] text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex justify-between"
            >
              {label}{" "}
              {extra && (
                <span className="text-[1.8em] absolute right-[20%] top-[17.1%] font-bold">
                  {extra}
                </span>
              )}
            </Link>
            {separator && <hr className="border-gray-300" />}
          </li>
        ))}
        <li onClick={handleLogout}>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer"
          >
            Logout
          </Link>
        </li>
        <li
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer"
          onClick={() => setClicked((prev) => !prev)}
        >
          <ChangeLanguage
            isClicked={isClicked}
            setClicked={setClicked}
            showIcon={true}
          />
          <span className="ml-auto mr-2 text-sm">English</span>
          <MdLanguage className="text-lg" />
        </li>
        <hr className="border-gray-300" />
        <li>
          <Link
            to="/udemy-business/request-demo-mx/?ref=account-menu&locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col px-4 py-3 text-gray-70 cursor-pointer w-full"
          >
            <div className="flex justify-between">
              <span className="hover:text-purple-600 font-bold">
                Udemy Business
              </span>
              <FaExternalLinkAlt size={18} />
            </div>
            <p className="text-gray-500 mt-1">Bring learning to your company</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
