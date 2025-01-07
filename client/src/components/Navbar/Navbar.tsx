import SearchInput from "./SearchInput/SearchInput";
import LoginBtn from "./Login/LoginBtn";
import SignupBtn from "./SignupBtn/SignupBtn";
import Cart from "./Cart/Cart";
import Language from "./Language/Language";
import Logo from "../Logo/Logo";
import AtagBtn from "../AtagBtn/AtagBtn";
import SearchResults from "./SearchResults/SearchResults";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index"; // Import RootState type for Redux
import Heart from "./Heart/Heart";

const Navbar = () => {

  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-screen"
      style={{ height: "4.5rem" }}
    >
      <Logo />
      <AtagBtn aTagName={"Explore"} />
      <SearchInput />
      <AtagBtn aTagName={"Udemy Business"} />
      <AtagBtn aTagName={"Teach on Udemy"} />
      <div className="flex items-center gap-4">
        {!user && <LoginBtn />}
        {!user && <SignupBtn />}
        {user && <AtagBtn aTagName={"My learning"} />}
        <Cart />
        <Heart />
        <Language />
      </div>
      <SearchResults />
    </div>
  );
};

export default Navbar;
