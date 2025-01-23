import { useEffect, useState } from "react";
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

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const endTime = new Date().getTime() + 14 * 60 * 60 * 1000 + 7 * 60 * 1000;

    const interval = setInterval(() => {
      let now = new Date().getTime();
      let remaining = endTime - now;

      if (remaining > 0) {
        let hours = Math.floor(remaining / (1000 * 60 * 60));
        let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Time's up!");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      <div className="bg-[#c2e9eb] flex flex-col items-center justify-center w-full p-[1em]">
        <p className="text-[1.1em]">
          <b className="text-[1.2em]">Sale ending</b> | Invest in yourself with
          learning. Courses from ₪59.90.
        </p>
        <b className="text-[1.3em]">Ends in {timeLeft}</b>
      </div>
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
            <Link to="/user/edit-profile">
              <Profile cookie={cookie} />
            </Link>
          </>
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
