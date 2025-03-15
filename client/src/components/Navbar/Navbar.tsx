import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import CategoriesMenu from "./Categories/CategoriesMenu";
import { isRootPathOnly } from "@/utils/extraGenerals";
import ChangeLanguage from "./DropDownMenu/ChangeLanguage/ChangeLanguage";
import SaleCommercialTwo from "./SaleCommercials/SaleCommercialTwo/SaleCommercialTwo";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const [isClicked, setClicked] = useState(false);
  const cookie = useSelector((state: RootState) => state?.user.cookie);

  useEffect(() => {}, [cookie]);

  return (
    <div>
      {/* <SaleCommercial /> */}
      <SaleCommercialTwo />
      {!isMobile && (
        <div className="pb-[0.9em] pt-[0.2em] w-full flex items-center bg-white relative shadow-carouselShadowBtn justify-between px-[1.55rem]">
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
                    : "w-full flex items-center justify-center p-[0.3em]"
                }
              >
                <div className={isRootPathOnly() ? "hidden" : "flex-grow"}>
                  <SearchInput />
                </div>
                {cookie && <AtagBtn aTagName={"Udemy Business"} />}
                <AtagBtn aTagName={"Teach on Udemy"} />
                {cookie && (
                  <Link to="/wishlist">
                    <AtagBtn aTagName={"My learning"} />
                  </Link>
                )}
                {cookie.length > 1 && (
                  <div className="flex items-center">
                    <Heart />
                  </div>
                )}
                <Link to="/cart">
                  <Cart />
                </Link>
                <div className="flex items-center justify-around gap-[0.3em]">
                  {cookie.length > 1 && (
                    <div className="flex items-center">
                      <Notifications />
                    </div>
                  )}
                  {!cookie && (
                    <div className="flex flex-row gap-[0.3em]">
                      <LoginBtn />
                      <SignupBtn />
                    </div>
                  )}
                </div>
                {cookie && <Profile cookie={cookie} />}
                {!cookie && (
                  <div className="ml-[0.3em]">
                    <ChangeLanguage
                      size={20}
                      isClicked={isClicked}
                      setClicked={setClicked}
                      showIcon={false}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={isRootPathOnly() ? "flex mt-[0.5em]" : "hidden"}>
              <SearchInput />
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="pb-[0.9em] pt-[0.2em] w-full flex items-center bg-white relative shadow-carouselShadowBtn justify-between px-[1.55rem]">
          <div>
            <button className="focus:outline-none">
              <GiHamburgerMenu size={20} />
            </button>
          </div>
          <div>
            <Logo CustomCssSize="h-[2.5em]" />
          </div>
          <div>
            <Link to="/cart">
              <Cart />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
