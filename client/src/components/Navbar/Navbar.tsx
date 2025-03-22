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
import { RootState } from "@/redux/store";
import CategoriesMenu from "./Categories/CategoriesMenu";
import { isRootPathOnly } from "@/utils/isRootPathOnly";
import ChangeLanguage from "./DropDownMenu/ChangeLanguage/ChangeLanguage";
import SaleCommercialTwo from "./SaleCommercials/SaleCommercialTwo/SaleCommercialTwo";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const [isClicked, setClicked] = useState(false);
  const cookie = useSelector((state: RootState) => state?.user?.cookie);
  const prevLogWGoogle = useSelector(
    (state: RootState) => state.user.isLoggedPreviouslyWithGoogle,
  );
  const coursesInCart =
    useSelector((state: RootState) => state?.cart?.coursesAddedToCart) ||
    useSelector((state: RootState) => state?.cart?.coursesAddedToWishList);

  useEffect(() => {}, [cookie]);

  return (
    <div>
      {/* <SaleCommercial />dasdsa */}
      <SaleCommercialTwo />
      {!isMobile && (
        <div className="relative z-[50] flex w-full items-center justify-between bg-white px-[1.55rem] pb-[0.9em] pt-[0.2em] shadow-carouselShadowBtn">
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center">
              <div className="flex flex-row items-center gap-[0.5em]">
                <Link to="/">
                  <Logo />
                </Link>
                <CategoriesMenu />
              </div>
              <div
                className={
                  isRootPathOnly()
                    ? "flex w-full items-center justify-end"
                    : "flex w-full items-center justify-center p-[0.3em]"
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
                {cookie && (
                  <div className="flex items-center">
                    <Heart />
                  </div>
                )}
                <Link to="/cart">
                  <Cart />
                </Link>
                <div className="flex items-center justify-around gap-[0.3em]">
                  {cookie && (
                    <div className="flex items-center">
                      <Notifications />
                    </div>
                  )}
                  {!cookie && (
                    <div className="flex flex-row gap-2">
                      <LoginBtn />
                      <SignupBtn />
                    </div>
                  )}
                </div>
                {cookie && (
                  <Link to="/user/edit-profile">
                    {coursesInCart.length >= 1 && (
                      <div className="absolute right-[2.3%] top-[29%] z-10 h-3 w-3 rounded-full bg-purple-600"></div>
                    )}
                    <Profile cookie={cookie} />
                  </Link>
                )}
                {!cookie && (
                  <div className="ml-2">
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
            <div className={isRootPathOnly() ? "mt-[0.5em] flex" : "hidden"}>
              <SearchInput />
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          <MobileNavbar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
