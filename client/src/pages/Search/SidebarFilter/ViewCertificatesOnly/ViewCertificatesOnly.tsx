import { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";

const ViewCertificatesOnly = () => {
  const [filterData, setFilterData] = useContext(filterContext);

  const [isActive, setIsActive] = useState<boolean | null>(false);

  const handleToggle = () => {
    setFilterData((prev) => ({
      ...prev,
      certificateOnly: !prev.certificateOnly,
    }));
    console.log(filterData.certificateOnly);
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-[0.5em] py-[1em]"
      onClick={handleToggle}
    >
      {isActive ? (
        <BsToggleOff className="text-2xl text-gray-400" />
      ) : (
        <BsToggleOn className="text-2xl text-toggleActive" />
      )}
      <p className="text-sm font-medium">
        View certification prep courses only
      </p>
    </div>
  );
};

export default ViewCertificatesOnly;
