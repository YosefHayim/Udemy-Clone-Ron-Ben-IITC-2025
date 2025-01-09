import { IoMdCheckmark } from "react-icons/io";

const WhatYouLearn = () => {
  return (
    <div className="flex flex-col items-start justify-start border p-[1em] w-[700px] text-[0.9em] mt-[4em]">
      <h2 className="font-bold w-full p-[0.5em] text-[1.5em]">
        What you'll learn
      </h2>
      <div className="flex">
        <div className="flex-col">
          <ul className="flex-col">
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>Understand the fundamentals of Semiconductors.</p>
            </li>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>Classify materials w.r.t. Energy Band concept.</p>
            </li>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>
                Learn Intrinsic semiconductor : Fundamentals,Theory and
                Problems.
              </p>
            </li>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>Learn the concept of Drift velocity, Free-path, Mobility.</p>
            </li>
          </ul>
        </div>
        <div className="flex-col">
          <ul>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>Learn the Energy Band concept.</p>
            </li>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>
                Learn about Direct band gap and Indirect band gap
                Semiconductors.
              </p>
            </li>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>
                Understand Extrinsic Semiconductor : Fundamentals, Concept of
                Doping, P-type and N-type Semiconductor.
              </p>
            </li>
            <li className="flex items-center gap-[1em]">
              <IoMdCheckmark className="text-[1.5em]" />
              <p>
                Understand the relation among current density, mobility and
                conductivity.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouLearn;
