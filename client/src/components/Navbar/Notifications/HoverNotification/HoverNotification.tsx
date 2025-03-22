import { useState } from "react";
import { Link } from "react-router-dom";
import placeholderInstructorMessage from "/images/instructor-img-placeholder.png";
import { Button } from "@/components/ui/button";

const HoverNotification = () => {
  const [clickedType, setClickedType] = useState(false);
  const [isNotificationsExist, setNotificationExist] = useState(true);

  return (
    <div>
      <div className="absolute right-[0em] top-[1em] z-[1000] mt-[0.1em] flex w-[300px] cursor-pointer flex-col items-start justify-center rounded-t-lg border border-gray-300 bg-white shadow-alertAlgoInfo">
        <div className="flex w-full items-center justify-between p-[1em]">
          <div>
            <button className="focus:outline-none">
              <b className="text-[1.2em]">Notification</b>
            </button>
          </div>
          <div>
            <Link to="/account/notifications/">
              <button className="focus:outline-none">
                <b className="hover:text-purpleStatic">Settings</b>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-around pb-[0.5em]">
            <div>
              <button className="focus:outline-none">
                <b>Instructor</b>
              </button>
            </div>
            <div>
              <button className="focus:outline-none">
                <b>Student</b>
              </button>
            </div>
          </div>
          <hr className="mb-[1em] w-full" />
        </div>
        <div className="mb-[1em] w-full p-[0.8em] font-medium">
          {!isNotificationsExist && (
            <p className="text-center">No notifications.</p>
          )}
          <div className="flex w-full items-start justify-center gap-[0.5em] pb-[1em]">
            <img
              src={placeholderInstructorMessage}
              alt=""
              className="h-[4em] rounded-[100em] border border-gray-500"
            />
            <div className="flex w-full flex-col">
              <p className="font-extrabold">
                Andrei Engobe and 1 other made an announcement:The AI Limits?...
              </p>
              <p className="font-normal text-gray-900">3 days ago</p>
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-row items-center justify-between pt-[1em]">
            <Button
              className={`${
                isNotificationsExist
                  ? "cursor-not-allowed opacity-[0.3]"
                  : "opacity-[1]"
              } bg-white font-extrabold text-purple-600 shadow-none hover:bg-purpleHoverBtn`}
            >
              Mark all as read
            </Button>
            <Button className="rounded-[0.2em] border border-purple-600 bg-white px-[2.5em] py-[0.5em] font-extrabold text-purple-600  shadow-none hover:bg-purpleHoverBtn">
              See all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverNotification;
