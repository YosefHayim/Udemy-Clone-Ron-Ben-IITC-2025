import Filter from "@/components/Filter/Filter";
import { SidebarFilterProps } from "@/types/types";
import { languages } from "@/utils/languanges";
import { useState } from "react";

const LanguageFilter: React.FC<SidebarFilterProps> = ({
  filterData,
  setFilterData,
}) => {
  const [display, setDisplay] = useState<boolean>(true);

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
