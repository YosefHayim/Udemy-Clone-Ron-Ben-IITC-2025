import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import ProfilePic from "../../ProfilePic/ProfilePic";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartCoursesNumber from "../Cart/CartCoursesNumber/CartCoursesNumber";
import Cookies from "js-cookie";
import { RootState } from "@/redux";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/slices/userSlice";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
import { useState } from "react";

const DropdownMenu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fullName = useSelector((state: RootState) => state.user.fullName) || "";
  const profilePic = useSelector((state: RootState) => state.user.profilePic);
  const email = useSelector((state: RootState) => state.user.email);

  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const [firstWord, secondWord] = fullName.split(" ") || "";

  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") +
    (secondWord?.[0]?.toUpperCase() || "");

  const handleLogout = () => {
    Cookies.remove("cookie");
    dispatch(clearUser());
    navigate("/logout");
  };

  return (
    <div>
      <div className="absolute right-0 mt-[1em] w-72 bg-white border border-gray-300 shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-[1000]">
        <div className="flex items-center p-4 border-b">
          <Link to="/user/edit-profile">
            <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
          </Link>
          <div className="ml-3">
            <div className="font-bold text-gray-800">{fullName}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
        {/* Menu Items */}
        <ul className="py-2 text-sm">
          <li>
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              My learning
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
            >
              My cart
              <CartCoursesNumber />
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Teach on Udemy
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Notifications
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Messages
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Account settings
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-payment-methods/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Payment methods
            </Link>
          </li>
          <li>
            <Link
              to="/user/manage-subscriptions/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Subscriptions
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/credit-history"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Udemy credits
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/purchase-history"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Purchase history
            </Link>
          </li>
          <hr />
          <li>
            <div
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={handleClick}
            >
              <span className="text-sm">
                <ChangeLanguage isClicked={isClicked} setClicked={setClicked} />
              </span>
              <span className="ml-auto mr-2 text-sm">English</span>
              <MdLanguage className="text-lg" />
            </div>
          </li>
          <li>
            <Link
              to="/user/public-profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Public profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Edit profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/edit-profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Help and support
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/demo-business"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span>Udemy Business</span>
                <FaExternalLinkAlt />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Bring learning to your company
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
