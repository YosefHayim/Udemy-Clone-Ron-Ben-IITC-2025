import { useState } from "react";
import LogoutMessage from "../Home/LogoutMessage/LogoutMessage";
import logoutBanner from "/images/logout-banner.jpg";
import udemyBusinessLogo from "/images/udemy-business-logo.png";

const Logout: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  document.title = "udemy.com/logout/";

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const closestDiv = target.closest("div[id]");
    if (closestDiv) {
      const categoryName = closestDiv.id;
      console.log(categoryName);
      setSelectedCategory(categoryName);
    }
  };

  return (
    <div className="px-[2em] mb-[2em]">
      <LogoutMessage />
      <img src={logoutBanner} alt="Logout banner" />
      <div className="w-[320px] flex col items-center justify-start gap-[0.5em] absolute top-[50%] right-[70%]">
        <div>
          <img
            src={udemyBusinessLogo}
            alt="Udemy business logo"
            className="absolute top-[-80%] right-[7%]"
          />
        </div>
        <div>
          <p className="text-[1.2em] font-medium">
            Your company can give you access to our top 27,000+ business and
            tech courses.
          </p>
          <div className="mt-[1em]">
            <button className="focus:outline-none font-bold transition duration-150 text-sm font-Sans py-[0.7em] bg-btnColor hover:bg-[#892DE1] text-white rounded-[0.2rem] px-[0.5em] focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div
        className="mt-[2.5em] flex flex-row items-start justify-start gap-[1.5em]"
        onClick={handleClick}
      >
        {[
          "business",
          "design",
          "photography-video",
          "marketing",
          "it-software",
          "personal-development",
        ].map((category) => (
          <div
            className="pb-[0.5em] cursor-pointer"
            id={category}
            key={category}
          >
            <b
              className={`text-gray-600 hover:text-black ${
                selectedCategory === category ? "!text-black font-bold" : ""
              }`}
            >
              {category
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" & ")}
            </b>
            <hr
              className={`border border-black relative w-min-max bottom-0 ${
                selectedCategory === category ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Logout;
