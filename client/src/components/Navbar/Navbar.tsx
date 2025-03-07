import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput/SearchInput";
import LoginBtn from "./LoginBtn/LoginBtn";
import SignupBtn from "./SignupBtn/SignupBtn";
import Cart from "./Cart/Cart";
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
import ChangeLanguage from "./DropDownMenu/ChangeLanguage/ChangeLanguage";

const Navbar = () => {
  const cookie = useSelector((state: RootState) => state.user.cookie) || "";
  const [isClicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCookie = Cookies.get("cookie");
    if (currentCookie && currentCookie !== cookie) {
      dispatch(setCookie(currentCookie));
    }
  }, [cookie, dispatch, isRootPathOnly]);

  return (
    <div>
      <SaleCommercial />
      <div className="w-full flex items-center bg-white relative shadow-md justify-between px-[1.55rem] py-[0.5em] font-medium text-[1.4rem] mb-[1em]">
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
                isRootPathOnly()
                  ? "w-full flex items-center justify-end"
                  : "w-full flex items-center justify-center"
              }
            >
              <div className={isRootPathOnly() ? "hidden" : "flex-grow"}>
                <SearchInput />
              </div>
              <AtagBtn aTagName={"Udemy Business"} />
              <AtagBtn aTagName={"Teach on Udemy"} />
              <Link to="/wishlist">
                <AtagBtn aTagName={"My learning"} />
              </Link>
              {cookie.trim().length > 1 && (
                <div className="flex items-center">
                  <Heart />
                </div>
              )}
              <Link to="/cart">
                <Cart />
              </Link>
              <div className="flex items-center justify-around gap-[0.3em]">
                {cookie.trim().length > 1 && (
                  <div className="flex items-center">
                    <Notifications />
                  </div>
                )}
                {!cookie.trim() && (
                  <div className="flex flex-row gap-[0.3em]">
                    <LoginBtn />
                    <SignupBtn />
                  </div>
                )}
              </div>
              {!cookie.trim() && (
                <Link to="/user/edit-profile">
                  <Profile cookie={cookie} />
                </Link>
              )}
              {!cookie.trim() && (
                <div className="ml-[0.3em]">
                  <ChangeLanguage
                    isClicked={isClicked}
                    setClicked={setClicked}
                    showIcon={false}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={isRootPathOnly() ? "block" : "hidden"}>
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
