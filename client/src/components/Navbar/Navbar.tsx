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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cookie, setCookie] = useState(Cookies.get("cookie"));

  useEffect(() => {}, [cookie]);

  return (
    <div className="h-[4.5em] flex items-center py-3 bg-white w-screen z-[10] px-[0.5em]">
      <div className="flex items-center w-full shadow-md justify-between">
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
      </div>
    </div>
  );
};

export default Navbar;
