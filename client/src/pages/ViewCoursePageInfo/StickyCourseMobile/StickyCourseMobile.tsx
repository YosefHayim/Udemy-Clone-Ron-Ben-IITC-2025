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
  );
};

export default StickyCourseMobile;
