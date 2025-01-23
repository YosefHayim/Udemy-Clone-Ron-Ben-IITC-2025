import Filter from "@/components/Filter/Filter";
import { levels } from "@/utils/levels";
import { useState } from "react";
import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";

const Levels = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div>
      <Filter
        filterTitle={"Level"}
        filterItems={levels}
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

export default Levels;
