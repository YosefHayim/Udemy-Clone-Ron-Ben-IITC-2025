// import { AtagBtnProps } from "@/types/types";

// const AtagBtn: React.FC<AtagBtnProps> = ({ aTagName }) => {
//   return (
//     <a
//       href="#"
//       className="text-[#020202] font-normal text-sm font-Sans rounded-md hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
//     >
//       {aTagName}
//     </a>
//   );
// };

// export default AtagBtn;

import React, { useState } from "react";

const AtagBtn: React.FC<{ aTagName: string }> = ({ aTagName }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Botão Principal */}
      <a
        href="#"
        className="text-[#020202] font-normal text-sm font-Sans rounded-md px-3 py-4 hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        {aTagName}
      </a>

      {/* Card de Hover */}
      {isHovering && (
        <div className="absolute top-[3.5rem] right-0 w-[290px] bg-white shadow-lg rounded-lg p-4 text-center z-50">
          <p className="text-lg font-bold leading-tight text-gray-800">
            {aTagName === "Udemy Business"
              ? "Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
              : "Turn what you know into an opportunity and reach millions around the world."}
          </p>
          <button className="bg-purple-700 text-base text-white font-bold rounded-md mt-5 px-4 py-3 w-full hover:bg-purple-800">
            {aTagName === "Udemy Business" ? "Try Udemy Business" : "Learn more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AtagBtn;
