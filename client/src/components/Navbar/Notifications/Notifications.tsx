import { IoMdNotificationsOutline } from "react-icons/io";

const Notifications = () => {
  return (
    <button className="focus:outline-none cursor-pointer text-black font-bold hover:text-purple-800 hover:bg-purple-100 py-[0.6rem] px-[0.6rem] rounded-md">
      <IoMdNotificationsOutline className="w-6 h-6" />
    </button>
  );
};

export default Notifications;
