import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const SaleCommercial = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [hiddenCommercial, setHiddenCommercial] = useState(
    localStorage.getItem("hiddenCommercial") === "true"
  );

  useEffect(() => {
    const endTime = new Date().getTime() + 14 * 60 * 60 * 1000 + 7 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = endTime - now;

      if (remaining > 0) {
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
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
      className={`${hiddenCommercial ? "hidden" : "flex flex-wrap flex-grow"}`}
    >
      <div className="bg-[#c2e9eb] flex flex-col items-center justify-center w-full p-[1em]">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row items-center justify-center w-full">
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
              className="hover:bg-purpleHoverBtn p-[1em] rounded-[0.2em] cursor-pointer border-none bg-none"
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
