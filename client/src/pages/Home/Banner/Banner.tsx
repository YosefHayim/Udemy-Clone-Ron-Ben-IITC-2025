import { useEffect, useState } from "react";
import { btnStyleNHover, loginWithEmailBtn } from "@/utils/stylesStorage";
import LearningGetsYouBanner from "/images/banner3.jpg";
import skillsDriveYouBanner from "/images/banner4.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const baseBanners = [
  {
    src: LearningGetsYouBanner,
    title: "Learning that gets you",
    description:
      "Skills for your present (and your future). Get started with us.",
  },
  {
    src: skillsDriveYouBanner,
    title: "Skills that drive you forward",
    description:
      "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
  },
];

const Banner: React.FC<{ isLogin?: boolean }> = ({ isLogin }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // This one is creating infinite banners to scroll from the banners base which we just add to it and thats it.
  const generatedBanners = Array.from(
    { length: (currentIndex + 1) * 2 },
    (_, i) => {
      return baseBanners[i % baseBanners.length];
    },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute shadow-alertAlgoInfo z-10 bg-white rounded-full left-[1%] top-[43%]">
        <button
          className="focus:outline-none p-2 hover:bg-gray-200 rounded-full"
          onClick={handlePrev}
        >
          <RiArrowLeftSLine size={24} />
        </button>
      </div>
      <div className="absolute shadow-alertAlgoInfo z-10 bg-white rounded-full right-[2%] top-[43%]">
        <button
          className="focus:outline-none p-2 hover:bg-gray-200 rounded-full"
          onClick={handleNext}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>

      {isLogin ? (
        <div className="p-2">
          <div className="w-full relative">
            <img
              src={LearningGetsYouBanner}
              alt="banner udemy welcome"
              className="w-full relative"
            />
            <div className="flex flex-col items-start gap-2 w-[400px] shadow-alertAlgoInfo px-5 py-7 absolute left-16 top-16 bg-white text-black rounded-sm border-gray-100">
              <h1 className="font-bold">Learning that gets you</h1>
              <p className="text-lg pr-2">
                Skills for your present (and your future). Get started with us.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full relative h-full overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {generatedBanners.map((banner, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img src={banner.src} alt={`banner-${index}`} className="" />
                <div
                  className={`${banner.title === "Skills that drive you forward" ? "w-[420px]" : "w-min-max pr-14"} flex flex-col items-start shadow-alertAlgoInfo px-5 py-7 absolute left-16 top-16 bg-white text-black rounded-sm border-gray-100"`}
                >
                  <h1 className="font-bold">{banner.title}</h1>
                  <p
                    className={`${banner.title === "Skills that drive you forward" ? "" : "w-[380px]"} text-sm pr-2`}
                  >
                    {banner.description}
                  </p>
                  {banner.title === `Skills that drive you forward` && (
                    <div className="w-full gap-2 flex items-center justify-center">
                      <button
                        className={`${loginWithEmailBtn} font-extrabold w-full h-[40px]`}
                      >
                        Plan for individuals
                      </button>
                      <button
                        className={`${btnStyleNHover} font-extrabold text-purple-800 border-purple-800 border w-full h-[40px]`}
                      >
                        Plan for organizations
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
