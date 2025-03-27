import { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import HoverNotification from './HoverNotification/HoverNotification';
import { btnStyleNHover } from '@/utils/stylesStorage';

const Notifications = () => {
  const [showNotificationHover, setShowNotificationHover] = useState(false);

  const handleMouseEnter = () => setShowNotificationHover(true);
  const handleMouseLeave = () => setShowNotificationHover(false);

  return (
    <div>
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className={`${btnStyleNHover}`}>
          <IoMdNotificationsOutline className="h-6 w-6" />
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
