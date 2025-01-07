import { LuAlarmClock } from "react-icons/lu";

const TimeLeftBuyCourse = () => {
  return (
    <div className="text-[#b32d0f] flex flex-row gap-[0.2em] items-center">
      <LuAlarmClock />
      <b>3 days</b>
      <p>left at this price!</p>
    </div>
  );
};

export default TimeLeftBuyCourse;
