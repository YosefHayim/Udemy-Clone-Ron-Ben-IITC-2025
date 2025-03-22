import { useEffect, useState } from "react";
import ButtonsCarousel from "@/components/ButtonsCarousel/ButtonsCarousel";
import { baseBanners } from "@/utils/banners";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import thanksTryingFreeCourse from "/images/banner7.jpg";
import subscribeToTheBestOfUdemy from "/images/banner5.jpg";

const Banner: React.FC<{ isLogin?: boolean }> = ({ isLogin }) => {
  const coursesBoughtOrJoined = useSelector(
    (state: RootState) => state.user.coursesBought,
  );
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const registerAt = useSelector((state: RootState) => state.user.whenCreated);

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

  if (coursesBoughtOrJoined.length > 1) {
    baseBanners.push({
      src: thanksTryingFreeCourse,
      title: `${fullName}, thanks for trying a free course`,
      description: `Now, unlock our best features with courses as low as ₪49.90 — limited time only.`,
    });
  }

  const isWithin14Days =
    registerAt &&
    (new Date().getTime() - new Date(registerAt).getTime()) /
      (1000 * 60 * 60 * 24) <=
      14;

  if (isWithin14Days) {
    baseBanners.push({
      src: subscribeToTheBestOfUdemy,
      title: "Subscribe to the best of Udemy",
      description:
        "With Personal Plan, you get access to 11,000+ of our top-rated courses in tech, business, and more.",
    });
  }

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
                className={`${banner.title === "Skills that drive you forward" ? "w-[450px]" : "w-[450px]"} border-gray-100" absolute left-16 top-16 flex flex-col items-start gap-3 rounded-sm bg-white px-5 py-7 text-black shadow-alertAlgoInfo`}
              >
                <h1 className="w-full font-extrabold">{banner.title}</h1>
                <p
                  className={`${banner.title === "Skills that drive you forward" && `w-[380px]`} pr-2 font-sans text-sm`}
                >
                  {banner.description}
                </p>
                {banner.title === `Skills that drive you forward` && (
                  <div
                    className={`flex w-[370px] items-center justify-center gap-2`}
                  >
                    <button
                      className={`w-full rounded-[0.3em] bg-btnColor px-0 py-3 font-sans font-extrabold text-white hover:bg-btnHoverColor focus:outline-none`}
                    >
                      Plan for individuals
                    </button>
                    <button
                      className={`w-full rounded-[0.3em] border border-purple-800 px-2 py-3 font-sans font-extrabold text-purple-800 hover:bg-purple-100 focus:outline-none`}
                    >
                      Plan for organizations
                    </button>
                  </div>
                )}
                {banner.title === `Subscribe to the best of Udemy` && (
                  <div>
                    <button
                      className={`w-full rounded-[0.3em] bg-btnColor px-2 py-3 font-sans font-extrabold text-white hover:bg-btnHoverColor focus:outline-none`}
                    >
                      Try it free
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
