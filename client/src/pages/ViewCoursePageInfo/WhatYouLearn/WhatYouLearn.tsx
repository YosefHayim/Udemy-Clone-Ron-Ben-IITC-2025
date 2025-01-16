import { IoMdCheckmark } from "react-icons/io";

const WhatYouLearn: React.FC<{ prosCourse: string[] }> = ({ prosCourse }) => {
  if (!prosCourse) {
    return null;
  }

  const half = Math.ceil(prosCourse.length / 2); // Split the array into two columns
  const firstColumn = prosCourse.slice(0, half);
  const secondColumn = prosCourse.slice(half);

  return (
    <div className="flex flex-col items-start justify-start border p-[1em] w-[700px] text-[0.9em] mt-[12em]">
      <h2 className="font-bold w-full p-[0.5em] text-[1.5em]">
        What you'll learn
      </h2>
      <div className="flex">
        <div className="flex-col">
          <ul className="flex-col">
            {firstColumn.map((item, index) => (
              <li key={index} className="flex items-center gap-[1em]">
                <IoMdCheckmark className="text-[1.5em]" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col">
          <ul>
            {secondColumn.map((item, index) => (
              <li key={index} className="flex items-center gap-[1em]">
                <IoMdCheckmark className="text-[1.5em]" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouLearn;
