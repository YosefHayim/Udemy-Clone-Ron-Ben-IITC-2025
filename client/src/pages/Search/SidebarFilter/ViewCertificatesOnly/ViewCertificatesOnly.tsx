import { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const ViewCertificatesOnly = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className="flex items-center gap-[0.5em] cursor-pointer py-[1em]"
      onClick={handleToggle}
    >
      {isActive ? (
        <BsToggleOn className="text-toggleActive text-2xl" />
      ) : (
        <BsToggleOff className="text-gray-400 text-2xl" />
      )}
      <p className="text-sm font-medium">
        View certification prep courses only
      </p>
    </div>
  );
};

export default ViewCertificatesOnly;
