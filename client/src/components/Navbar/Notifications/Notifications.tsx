import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import HoverNotification from "./HoverNotification/HoverNotification";

const Notifications = () => {
  const [showNotificationHover, setShowNotificationHover] = useState(false);

  const handleMouseEnter = () => setShowNotificationHover(true);
  const handleMouseLeave = () => setShowNotificationHover(false);

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="focus:outline-none cursor-pointer text-black font-bold hover:text-purple-800 hover:bg-purple-100 py-[0.6rem] px-[0.6rem] rounded-md">
          <IoMdNotificationsOutline className="w-6 h-6" />
        </button>
      </div>
      {showNotificationHover && (
        <div className="absolute z-[5000] p-[2em]">
          <HoverNotification />
        </div>
      )}
    </div>
  );
};

export default Notifications;
