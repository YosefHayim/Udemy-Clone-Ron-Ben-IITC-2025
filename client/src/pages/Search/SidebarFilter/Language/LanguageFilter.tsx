import Filter from "@/components/Filter/Filter";
import { SidebarFilterProps } from "@/types/types";
import { languages } from "@/utils/languages";
import { useState } from "react";

const LanguageFilter: React.FC<SidebarFilterProps> = () => {
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
      />
    </div>
  );
};

export default LanguageFilter;
