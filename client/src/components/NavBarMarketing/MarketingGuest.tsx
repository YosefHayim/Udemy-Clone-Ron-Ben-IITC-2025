import { useState } from "react";

const MarketingGuest = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-purpleStatic text-white py-[1rem] px-6 flex justify-center items-center relative">
      <span className="text-base font-semibold text-center">
        <span className="font-black">Ready to get with the times?</span> | Get
        the skills with Udemy Business.
      </span>
      <button
        className="absolute right-4 text-white text-3xl font-light pv-12 hover:opacity-80 focus:outline-none"
        onClick={() => setIsVisible(false)}
      >
        ×
      </button>
    </div>
  );
};

export default MarketingGuest;
