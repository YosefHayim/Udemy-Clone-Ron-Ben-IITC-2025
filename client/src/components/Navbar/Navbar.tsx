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
import { Link } from "react-router-dom";
import ExploreMenu from "./Explore/ExploreMenu";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className="flex items-center justify-between py-3 bg-white shadow-md w-screen z-[10] px-6"
      style={{ height: "4.5rem" }}
    >
      <div className="flex items-center gap-6 w-screen">
        <Link to="/">
          <Logo />
        </Link>
        <ExploreMenu />
        <SearchInput />
        <AtagBtn aTagName={"Udemy Business"} />
        <AtagBtn aTagName={"Teach on Udemy"} />
        {!user && <LoginBtn />}
        {!user && <SignupBtn />}
        {user && <AtagBtn aTagName={"My learning"} />}
        {user && <Heart />}
        <Cart />
        {user && <Notifications />}
        {user && <Profile />}
        {!user && <Language />}
      </div>
    </div>
  );
};

export default Navbar;
