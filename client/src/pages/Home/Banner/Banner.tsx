import { useEffect, useState } from "react";
import { btnStyleNHover, loginWithEmailBtn } from "@/utils/stylesStorage";
import LearningGetsYouBanner from "/images/banner3.jpg";
import skillsDriveYouBanner from "/images/banner4.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ButtonsCarousel from "./ButtonsCarousel";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 2000);
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
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <ButtonsCarousel
        state={currentIndex}
        leftPosition="1%"
        topPosition="43%"
        rightPosition="2%"
        useCustom={false}
        handleFnNext={handleNext}
        handleFnPrev={handlePrev}
      />
      {isLogin ? (
        <div className="p-2">
          <div className="relative w-full">
            <img
              src={LearningGetsYouBanner}
              alt="banner udemy welcome"
              className="relative w-full"
            />
            <div className="absolute left-16 top-16 flex w-[400px] flex-col items-start gap-2 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
              <h1 className="font-bold">Learning that gets you</h1>
              <p className="pr-2 text-lg">
                Skills for your present (and your future). Get started with us.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full overflow-hidden">
          <div
            className={`flex transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {generatedBanners.map((banner, index) => (
              <div key={index} className={`relative w-full flex-shrink-0`}>
                <img
                  src={banner.src}
                  alt={`banner-${index}`}
                  className="w-full"
                />
                <div
                  className={`${banner.title === "Skills that drive you forward" ? "w-[450px] gap-[0.5em] p-[2em]" : "w-min-max pr-14"} border-gray-100" absolute left-16 top-16 flex flex-col items-start rounded-sm bg-white px-5 py-7 text-black shadow-alertAlgoInfo`}
                >
                  <h1 className="font-bold">{banner.title}</h1>
                  <p
                    className={`${banner.title === "Skills that drive you forward" ? "" : "w-[380px]"} pr-2 text-sm`}
                  >
                    {banner.description}
                  </p>
                  {banner.title === `Skills that drive you forward` && (
                    <div className="flex w-full items-center justify-center gap-2">
                      <button
                        className={`${loginWithEmailBtn} h-[40px] w-full font-extrabold`}
                      >
                        Plan for individuals
                      </button>
                      <button
                        className={`${btnStyleNHover} h-[40px] w-full border border-purple-800 font-extrabold text-purple-800`}
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
