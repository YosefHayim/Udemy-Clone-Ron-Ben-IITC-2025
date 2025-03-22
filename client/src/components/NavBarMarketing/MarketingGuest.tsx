import { useState } from "react";

const MarketingGuest = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative flex items-center justify-center bg-purpleStatic px-6 py-[1rem] text-white">
      <span className="text-center text-base font-semibold">
        <span className="font-black">Ready to get with the times?</span> | Get
        the skills with Udemy Business.
      </span>
      <button
        className="pv-12 absolute right-4 text-3xl font-light text-white hover:opacity-80 focus:outline-none"
        onClick={() => setIsVisible(false)}
      >
        ×
      </button>
    </div>
  );
};

export default MarketingGuest;
