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
import ExploreMenu from "./Explore/ExploreMenu";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import MarketingGuest from "../NavBarMarketing/MarketingGuest";
// import Login from "@/pages/Login/Login";
// import SignUp from "@/pages/SignUp/Signup";
import 

const Navbar = () => {
  const cookie = Cookies.get("cookie");
  useEffect(() => { }, [cookie]);

  return (
    <>
      {/* {!cookie && <MarketingGuest />}
      <div className="h-[4.5em] flex items-center bg-white w-screen z-[10] shadow-md justify-between px-[1.55rem] py-[2.25rem] fonte-[1.4rem]">
        <Link to="/">
          <Logo />
        </Link>
        <ExploreMenu />
        <SearchInput />
        <AtagBtn aTagName={"Udemy Business"} />
        <AtagBtn aTagName={"Teach on Udemy"} />
        <Link to="/cart">
          <Cart />
        </Link>
        {!cookie && <LoginBtn />}
        {!cookie && <SignupBtn />}
        {cookie && <AtagBtn aTagName={"My learning"} />}
        {cookie && <Heart />}

        {cookie && <Notifications />}
        {cookie && <Profile />}
        {!cookie && <Language />}
      </div> */}

      {/* (Guest) */}
      {!cookie && (
        <div className="flex items-center bg-white w-screen z-[10] shadow-md justify-between px-[1.55rem] py-[0.75rem] font-medium text-[1.4rem]">
          <Link to="/">
            <Logo />
          </Link>
          <ExploreMenu />
          <SearchInput />
          <AtagBtn aTagName={"Udemy Business"} />
          <AtagBtn aTagName={"Teach on Udemy"} />
          <Link to="/cart">
            <Cart />
          </Link>
          <div className="flex items-center space-x-[0.4rem] pr-4">
            <LoginBtn />
            <SignupBtn />
            <Language />
          </div>
        </div>
      )}

      {/* Users */}
      {cookie && (
        <div className="h-[4.5em] flex items-center bg-white w-screen z-[10] shadow-md justify-between px-[1.55rem] py-[2.25rem] font-medium text-[1.4rem]">
          <Link to="/">
            <Logo />
          </Link>
          <ExploreMenu />
          <SearchInput />
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
          <Link to="client\src\pages\ProfilePage\ProfileMain.tsx">
            <Profile />
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
