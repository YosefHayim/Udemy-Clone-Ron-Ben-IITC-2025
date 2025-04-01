import { btnStyleNHover } from "@/utils/stylesStorage";
import { useState } from "react";

const stickyNavbarTopicsMobile = ["Overview", "Curriculum", "Instructor", "Reviews"];

const StickyCourseMobile = () => {
  const [selectedButton, setSelectedButton] = useState("Overview");

  const handleAndNavigateMobile = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest("button");

    if (!button) return;

    const topic = button.innerText.trim();
    setSelectedButton(topic);

    if (topic === "Overview") {
      console.log("Overview clicked");
    } else {
      console.log(`${topic} clicked`);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleAndNavigateMobile}
        className="fixed left-0 top-0 z-[1000] flex w-full items-center justify-around bg-white shadow-alertAlgoInfo"
      >
        <div className="flex w-full items-center justify-around">
          {stickyNavbarTopicsMobile.map((mobileTopic) => (
            <div className={`${selectedButton === mobileTopic && "bg-purple-100"}`}>
              <button className={`${btnStyleNHover} px-[0.2em] py-[1em]`}>
                <b className="text-purple-700">{mobileTopic}</b>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-[1000] flex w-full flex-col items-center justify-center gap-2 bg-white p-2 px-4">
        <button className="w-full rounded-[0.3em] bg-btnColor p-3 font-sans text-base font-extrabold text-white hover:bg-btnHoverColor focus:outline-none">
          Try Personal Plan for free
        </button>
        <div className="w-full text-center">
          <p>Starting at ₪66.67 per month after trial. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default StickyCourseMobile;
