import { FaExternalLinkAlt } from "react-icons/fa"; // Importa ícones
import { MdLanguage } from "react-icons/md";
import ProfilePic from "../../ProfilePic/ProfilePic";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCoursesNumber from "../Cart/CartCoursesNumber/CartCoursesNumber";
import Cookies from "js-cookie";
import { RootState } from "@/redux";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/slices/userSlice";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
import { useState } from "react";

const DropdownMenu: React.FC = () => {
  const dispatch = useDispatch();
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const profilePic = useSelector((state: RootState) => state.user.profilePic);
  const email = useSelector((state: RootState) => state.user.email);
  let cookie = Cookies.get("cookie");

  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  if (!cookie) {
    return <div></div>;
  }

  const [firstWord, secondWord] = fullName.split(" ");

  // Safely generate shortcutName using first and second word initials
  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || "") +
    (secondWord?.[0]?.toUpperCase() || "");

  const handleLogout = () => {
    Cookies.remove("cookie");
    dispatch(clearUser());
  };

  return (
    <div>
      <div className="absolute right-0 mt-[1em] w-72 bg-white border border-gray-300 shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-[1000]">
        <div className="flex items-center p-4 border-b">
          <Link to="/edit-profile">
            <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
          </Link>
          <div className="ml-3">
            <div className="font-bold text-gray-800">{fullName}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
        {/* Menu Items */}
        <ul className="py-2 text-sm">
          <Link to="/wishlist">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              My learning
            </li>
          </Link>
          <li>
            <Link to="/cart">
              <div className="flex flex-row justify-between  px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                My cart
                <div className="absolute right-[20%] top-[19%]">
                  <CartCoursesNumber />
                </div>
              </div>
            </Link>
          </li>
          <Link to="/wishlist">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Wishlist
            </li>
          </Link>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Teach on Udemy
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Messages
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Account settings
            </a>
          </li>
          <Link to="/user/edit-payment-methods/">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Payment methods
            </li>
          </Link>
          <Link to="/user/manage-subscriptions/">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Subscriptions
            </li>
          </Link>
          <Link to="/dashboard/credit-history">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Udemy credits
            </li>
          </Link>
          <Link to="/dashboard/purchase-history">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Purchase history
            </li>
          </Link>
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
          <Link to="/user/public-profile">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Public profile
            </li>
          </Link>
          <Link to="/edit-profile">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Edit profile
            </li>
          </Link>
          <Link to="/edit-profile">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Help and support
            </li>
          </Link>
          <li onClick={handleLogout}>
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </Link>
          </li>
          <hr />
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center justify-between">
              <span>Udemy Business</span>
              <FaExternalLinkAlt />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Bring learning to your company
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
