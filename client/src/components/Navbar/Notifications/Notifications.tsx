import { useState, useRef } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import HoverNotification from "./HoverNotification/HoverNotification";
import { btnStyleNHover } from "@/utils/stylesStorage";

const Notifications = () => {
  const [showNotificationHover, setShowNotificationHover] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setShowNotificationHover(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowNotificationHover(false);
    }, 200); // delay de 200ms
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={`${btnStyleNHover}`}>
        <IoMdNotificationsOutline className="h-5 w-5" />
      </button>
      {showNotificationHover && (
        <div
          className="absolute right-0 top-[2.5rem] z-[5000]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HoverNotification />
        </div>
      )}
    </div>
  );
};

export default Notifications;
