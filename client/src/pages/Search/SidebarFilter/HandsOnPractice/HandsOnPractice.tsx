import Filter from "@/components/Filter/Filter";
import { handsOnPractice } from "@/utils/handsOnPractice";
import { useState } from "react";
import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";

const HandsOnPractice = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [filterData, setFilterData] = useContext(filterContext);

  return (
    <div>
      <Filter
        filterTitle={"Hands-on Practice"}
        filterItems={handsOnPractice}
        chosenHeight={"h-[50px]"}
        display={display}
        setDisplay={setDisplay}
        useForSection={false}
        showLine={true}
        hideIcons={false}
      />
    </div>
  );
};

export default HandsOnPractice;
