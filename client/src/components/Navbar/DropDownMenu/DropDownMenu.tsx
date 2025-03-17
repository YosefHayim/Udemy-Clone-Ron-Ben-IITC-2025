import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ProfilePic from "../../ProfilePic/ProfilePic";
import CartCoursesNumber from "../Cart/CartCoursesNumber/CartCoursesNumber";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
import { clearUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { setClearAll } from "@/redux/slices/cartSlice";

const DropdownMenu: React.FC = () => {
  const [isClicked, setClicked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    fullName = "",
    profilePic,
    email,
  } = useSelector((state: RootState) => state?.user);
  const shortcutName = fullName
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");

  const handleLogout = () => {
    localStorage.removeItem("cookie");
    dispatch(setClearAll());
    dispatch(clearUser());
    navigate("/logout");
  };

  const menuItems = [
    { label: "My learning", to: "/home/my-courses" },
    { label: "My cart", to: "/cart", extra: <CartCoursesNumber /> },
    { label: "Wishlist", to: "/wishlist", separator: true },
    { label: "Notifications", to: "/user/edit-notifications/" },
    { label: "Messages", to: "/message", separator: true },
    { label: "Account settings", to: "/user/edit-account" },
    { label: "Payment methods", to: "/user/edit-payment-methods/" },
    { label: "Subscriptions", to: "/user/manage-subscriptions/" },
    { label: "Udemy credits", to: "/dashboard/credit-history" },
    {
      label: "Purchase history",
      to: "/dashboard/purchase-history/",
      separator: true,
    },
    {
      type: "custom",
      component: (
        <li
          className="my-[0.5em] flex items-center px-3 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer"
          onClick={() => setClicked((prev) => !prev)}
        >
          <ChangeLanguage showIcon={true} />
          <span className="ml-auto mr-2">English</span>
          <MdLanguage className="text-lg" />
        </li>
      ),
      separator: true,
    },
    { label: "Public profile", to: "/user/public-profile" },
    { label: "Edit profile", to: "/user/edit-profile", separator: true },
    { label: "Help and support", to: "/support/" },
  ];

  return (
    <div className="cursor-pointer absolute right-0 top-[100%] mt-[2.6em] w-72 bg-white border shadow-alertAlgoInfo rounded-lg z-[1600]">
      <div className="flex items-center p-1 my-2 border-b">
        <Link to="/user/edit-profile">
          <ProfilePic
            isHover={false}
            shortcutName={shortcutName}
            profilePic={profilePic}
            isBig={true}
          />
        </Link>
        <div>
          <div className="font-bold text-gray-800 hover:text-btnColor">
            {fullName}
          </div>
          <div className=" text-gray-500">{email}</div>
        </div>
      </div>
      <ul>
        {menuItems.map(
          ({ label, to, extra, separator, type, component }, index) =>
            type === "custom" ? (
              <React.Fragment key={index}>
                {component}
                {separator && <hr className="border-gray-300" />}
              </React.Fragment>
            ) : (
              <li key={index}>
                <Link
                  to={to}
                  className="my-[0.3em] px-4 py-[0.5em] text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex justify-between"
                >
                  {label}{" "}
                  {extra && (
                    <span className="absolute right-[15%] top-[18.1%] font-bold">
                      {extra}
                    </span>
                  )}
                </Link>
                {separator && <hr className="border-gray-300" />}
              </li>
            )
        )}
        <li onClick={handleLogout}>
          <Link
            to="/logout"
            className="block px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer"
          >
            Logout
          </Link>
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
