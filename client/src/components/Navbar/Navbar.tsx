import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput/SearchInput";
import LoginBtn from "./LoginBtn/LoginBtn";
import SignupBtn from "./SignupBtn/SignupBtn";
import Cart from "./Cart/Cart";
import Language from "./Language/Language";
import Logo from "../Logo/Logo";
import AtagBtn from "../AtagBtn/AtagBtn";
import Heart from "./Heart/Heart";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import Cookies from "js-cookie";
import { setCookie } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import SaleCommercial from "./SaleCommercial/SaleCommercial";
import CategoriesMenu from "./Categories/CategoriesMenu";
import { isRootPathOnly } from "@/utils/extraGenerals";

const Navbar = () => {
  const location = useLocation();
  const cookie = useSelector((state: RootState) => state.user.cookie) || "";
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCookie = Cookies.get("cookie");
    if (currentCookie && currentCookie !== cookie) {
      dispatch(setCookie(currentCookie));
    }
  }, [cookie, dispatch]);

  return (
    <div>
      <SaleCommercial />
      <div className="w-full flex items-center bg-white relative shadow-md justify-between px-[1.55rem] py-[0rem] font-medium text-[1.4rem]">
        {cookie.length > 1 ? (
          <div className="flex flex-col w-full">
            <div className="w-full flex items-center">
              <div className="flex flex-row items-center gap-[0.5em]">
                <Link to="/">
                  <Logo />
                </Link>
                <CategoriesMenu />
              </div>
              <div
                className={
                  isRootPathOnly
                    ? "w-full flex items-center justify-end"
                    : "w-full flex items-center justify-center"
                }
              >
                <div className={isRootPathOnly ? "hidden" : "flex-grow"}>
                  <SearchInput />
                </div>
                <AtagBtn aTagName={"Udemy Business"} />
                <AtagBtn aTagName={"Teach on Udemy"} />
                <Link to="/wishlist">
                  <AtagBtn aTagName={"My learning"} />
                </Link>
                <Heart />
                <Link to="/cart">
                  <Cart />
                </Link>
                <Notifications />
                <Link to="/user/edit-profile">
                  <Profile cookie={cookie} />
                </Link>
              </div>
            </div>
            <div className={isRootPathOnly ? "block" : "hidden"}>
              <SearchInput />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-[0.5em]">
            <Link to="/cart">
              <Cart />
            </Link>
            <Link to="/login">
              <LoginBtn />
            </Link>
            <Link to="/signup">
              <SignupBtn />
            </Link>
            <Language />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
