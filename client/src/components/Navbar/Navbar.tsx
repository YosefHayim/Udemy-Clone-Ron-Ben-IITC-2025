import SearchInput from "./SearchInput/SearchInput";
import LoginBtn from "./LoginBtn/LoginBtn";
import SignupBtn from "./SignupBtn/SignupBtn";
import Cart from "./Cart/Cart";
import Language from "./Language/Language";
import Logo from "../Logo/Logo";
import AtagBtn from "../AtagBtn/AtagBtn";
import SearchResults from "./SearchResults/SearchResults";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-screen z-[10] gap-[1em]"
      style={{ height: "4.5rem" }}
    >
      <Logo />
      <AtagBtn aTagName={"Explore"} />
      <SearchInput />
      <AtagBtn aTagName={"Udemy Business"} />
      <AtagBtn aTagName={"Teach on Udemy"} />
      <div className="flex items-center gap-4">
        <Cart />
        <LoginBtn />
        <SignupBtn />
        <Language />
      </div>
      <SearchResults />
    </div>
  );
};

export default Navbar;
