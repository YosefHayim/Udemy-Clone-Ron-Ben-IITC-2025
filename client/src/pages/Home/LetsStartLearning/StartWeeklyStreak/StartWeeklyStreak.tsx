import DialogPopup from "@/components/DialogPopup/DialogPopup";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const StartWeeklyStreak = () => {
  const [isOpenToolTip, setOpenTooltip] = useState(false);
  const handleClick = () => {
    setOpenTooltip(true);
  };

  return (
    <div>
      <div className="flex w-full items-center justify-around rounded-xl border border-gray-300 p-5 font-sans">
        <div className="flex w-full flex-col items-start justify-around gap-1 text-start">
          <h2 className="text-2xl font-extrabold">Start a new streak</h2>
          <p>Let’s chip away at your learning goals.</p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full items-center justify-start">
            <div className="flex w-full items-center justify-start">
              <MdOutlineLocalFireDepartment
                size={40}
                className="text-gray-300"
              />
              <div className="flex flex-col items-start justify-start text-base">
                <p className="text-sm">
                  <span className="text-2xl font-extrabold">0</span> Weeks
                </p>
                <p className="font-medium text-gray-500">Current streak</p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start justify-evenly gap-3 ">
            {/* // Circle area */}
            <div className="flex items-center justify-center gap-4">
              <div className="z-10 flex h-[5em] w-[5em] items-center justify-center rounded-full bg-gray-300">
                <div className="flex items-center justify-center rounded-full bg-white p-[0.45em]">
                  <div className="z-10 flex h-[3em] w-[3em] items-center justify-center rounded-full bg-green-600">
                    <div className="h-[1.9em] w-[1.9em] rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              {/* // Circle area */}
              <div className="relative flex items-center justify-center gap-2">
                <ul className="flex flex-col items-start justify-start">
                  <li className="flex items-center gap-1">
                    <div className="full h-1 w-1 rounded bg-yellow-400 p-1"></div>
                    <span className="font-extrabold">0</span>/30 course min
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="full h-1 w-1 rounded bg-green-400 p-1"></div>
                    <span className="font-extrabold">1</span>/1 visit
                  </li>
                  <li>Mar 23 - 29</li>
                </ul>
              </div>
            </div>
            {/* Tooltip area */}
            <DialogPopup
              extraCustomClass="font-sans p-[0.2em]"
              isClicked={isOpenToolTip}
              setClicked={setOpenTooltip}
            >
              <div className="flex w-full flex-col items-start justify-start gap-2 text-blackUdemy">
                <div className=" flex w-full flex-col items-start justify-start gap-4 p-5">
                  <h2 className="font-sans text-xl font-extrabold">
                    About Streaks
                  </h2>
                  <p>
                    Complete both your visit and minutes watched rings to
                    maintain your weekly streak.
                  </p>
                  <ul className="flex w-full flex-col items-center justify-center gap-4">
                    <li className="flex w-full items-center justify-start gap-2">
                      <div className="h-1 w-1 rounded-full bg-yellow-500 p-2"></div>
                      <div className="flex flex-col items-start justify-start">
                        <b>To complete the watch ring</b>
                        <p>Watch 30 minutes of course videos.</p>
                      </div>
                    </li>
                    <li className="flex w-full items-center justify-start gap-2">
                      <div className="h-1 w-1 rounded-full bg-green-600 p-2"></div>
                      <div className="flex flex-col items-start justify-start">
                        <b>To complete the watch ring</b>
                        <p>Open the app or website once a week</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-5">
                  <h2 className="font-sans font-extrabold ">Data updates</h2>
                  <p className="mt-2 w-full text-[0.9em]">
                    Your minutes watched updates three times per day. Return in
                    a few hours to see your progress.
                  </p>
                </div>
              </div>
            </DialogPopup>
            <div
              className="flex cursor-pointer items-center justify-start"
              onClick={handleClick}
            >
              <CiCircleInfo size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWeeklyStreak;
