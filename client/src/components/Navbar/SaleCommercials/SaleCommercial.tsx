import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const SaleCommercial = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [hiddenCommercial, setHiddenCommercial] = useState(
    localStorage.getItem("hiddenCommercial") === "true",
  );

  useEffect(() => {
    const endTime = new Date().getTime() + 14 * 60 * 60 * 1000 + 7 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = endTime - now;

      if (remaining > 0) {
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60),
        );
        setTimeLeft(`${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Time's up!");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCommercial = () => {
    setHiddenCommercial(true);
    localStorage.setItem("hiddenCommercial", "true");
  };

  return (
    <div
      className={`${hiddenCommercial ? "hidden" : "flex flex-grow flex-wrap"}`}
    >
      <div className="flex w-full flex-col items-center justify-center bg-[#c2e9eb] p-[1em]">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex w-full flex-row items-center justify-center">
            <div className="text-center">
              <p className="text-[1.1em]">
                <b className="text-[1.2em]">Sale ending</b> | Invest in yourself
                with learning. Courses from ₪59.90.
              </p>
              <div>
                <b className="text-[1.3em]">Ends in {timeLeft}</b>
              </div>
            </div>
          </div>
          <div>
            <button
              className="cursor-pointer rounded-[0.2em] border-none bg-none p-[1em] hover:bg-purpleHoverBtn"
              onClick={handleCommercial}
            >
              <HiOutlineXMark className="text-[1.5em]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCommercial;
