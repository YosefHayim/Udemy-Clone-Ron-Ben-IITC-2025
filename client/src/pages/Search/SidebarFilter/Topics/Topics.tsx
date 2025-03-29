import Filter from "@/components/Filter/Filter";
import { topics } from "@/utils/topics";
import { useState } from "react";
import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";

const Topics = () => {
  const [display, setDisplay] = useState<boolean>(true);
  const [filterData, setFilterData] = useContext(filterContext);

  return (
    <div>
      <Filter
        filterTitle={"Topics"}
        filterItems={topics}
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

export default Topics;
