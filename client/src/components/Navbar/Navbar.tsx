import SearchInput from "./SearchInput/SearchInput";
import LoginBtn from "./LoginBtn/LoginBtn";
import SignupBtn from "./SignupBtn/SignupBtn";
import Cart from "./Cart/Cart";
import Language from "./Language/Language";
import Logo from "../Logo/Logo";
import AtagBtn from "../AtagBtn/AtagBtn";
import SearchResults from "./SearchResults/SearchResults";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index"; // Import RootState type for Redux
import Heart from "./Heart/Heart";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";
import ExploreMenu from "./Explore/ExploreMenu";
import Cookies from "js-cookie";

const Navbar = () => {
  const cookie = Cookies.get("cookie");

  return (
    <div
      className="flex items-center justify-between py-3 bg-white shadow-md w-screen z-[10] px-6"
      style={{ height: "4.5rem" }}
    >
      <div className="flex items-center gap-6 w-screen">
        <Logo />
        <ExploreMenu />
        <SearchInput />
        <AtagBtn aTagName={"Udemy Business"} />
        <AtagBtn aTagName={"Teach on Udemy"} />
        {!cookie && <LoginBtn />}
        {!cookie && <SignupBtn />}
        {cookie && <AtagBtn aTagName={"My learning"} />}
        {cookie && <Heart />}
        <Cart />
        {cookie && <Notifications />}
        {cookie && <Profile />}
        {!cookie && <Language />}
      </div>
    </div>
  );
};

export default Navbar;
