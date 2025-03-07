import { IoMdNotificationsOutline } from "react-icons/io";

const Notifications = () => {
  return (
    <button className="focus:outline-none text-black font-bold hover:text-purple-800">
      <IoMdNotificationsOutline className="w-6 h-6" />
    </button>
  );
};

export default Notifications;
