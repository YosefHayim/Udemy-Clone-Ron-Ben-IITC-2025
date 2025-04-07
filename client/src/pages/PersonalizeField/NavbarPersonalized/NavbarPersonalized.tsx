import Logo from "@/components/Logo/Logo";
import ChangeLanguage from "@/components/Navbar/DropDownMenu/ChangeLanguage/ChangeLanguage";
import { personalizeContent } from "@/Contexts/PersonalizeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const NavbarPersonalized = () => {
  const personalizeTracking = useContext(personalizeContent);
  if (!personalizeTracking) throw new Error("No personalize tracking provided");
  const [personalizeData, setPersonalizeData] = personalizeTracking;

  return (
    <div>
      <div className="flex w-full  items-center justify-between p-[1em]">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex  items-center justify-center gap-[0.5em] text-btnColor">
          <Link to="/">
            <button className="rounded-[0.2em] px-[0.2em] py-[1em] font-sans font-extrabold hover:bg-purpleHoverBtn focus:outline-none">
              Save & Exit
            </button>
          </Link>
          <ChangeLanguage showIcon={false} />
        </div>
      </div>
      <div className="relative h-[0.3em] w-full overflow-hidden bg-gray-300">
        <div
          className="absolute left-0 top-0 h-full bg-btnColor transition-all duration-300"
          style={{ width: `${personalizeData.progressBar}%` }}
        ></div>
      </div>
    </div>
  );
};

export default NavbarPersonalized;
