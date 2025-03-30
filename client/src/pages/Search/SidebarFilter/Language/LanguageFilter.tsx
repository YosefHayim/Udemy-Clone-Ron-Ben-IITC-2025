import Filter from "@/components/Filter/Filter";
import { filterContext } from "@/contexts/filterSearch";
import { SidebarFilterProps } from "@/types/types";
import { languages } from "@/utils/languages";
import { useState } from "react";
import { useContext } from "react";

const LanguageFilter: React.FC<SidebarFilterProps> = () => {
  const [display, setDisplay] = useState<boolean>(true);
  const [filterData, setFilterData] = useContext(filterContext);

  return (
    <div>
      <Filter
        filterTitle={"Language"}
        filterItems={languages}
        chosenHeight={"h-[50px]"}
        display={display}
        setDisplay={setDisplay}
        useForSection={false}
        showLine={true}
        hideIcons={false}
        filterData={filterData}
        setFilterData={setFilterData}
      />
    </div>
  );
};

export default LanguageFilter;
