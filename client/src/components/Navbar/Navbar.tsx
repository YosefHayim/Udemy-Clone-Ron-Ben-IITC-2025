import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import Cookies from "js-cookie";
import { setCookie } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const cookie = useSelector((state: RootState) => state.user.cookie) || "";
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCookie = Cookies.get("cookie");
    if (currentCookie && currentCookie !== cookie) {
      dispatch(setCookie(currentCookie));
    }
  }, [cookie, dispatch]);

  return (
    <div className="flex items-center bg-white w-screen z-[1000] relative shadow-md justify-between px-[1.55rem] py-[0.75rem] font-medium text-[1.4rem]">
      <Link to="/">
        <Logo />
      </Link>
      <ExploreMenu />
      <SearchInput />
      <AtagBtn aTagName={"Udemy Business"} />
      <AtagBtn aTagName={"Teach on Udemy"} />
      {cookie ? (
        <>
          <Link to="/wishlist">
            <AtagBtn aTagName={"My learning"} />
          </Link>
          <Heart />
          <Link to="/cart">
            <Cart />
          </Link>
          <Notifications />
          <Link to="/edit-profile">
            <Profile cookie={cookie} />
          </Link>
        </>
      ) : (
        <div className="flex items-center space-x-[0.4rem] pr-4">
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
  );
};

export default Navbar;
