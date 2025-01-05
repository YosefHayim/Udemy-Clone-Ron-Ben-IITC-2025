import Filter from "@/components/Filter/Filter";
import { languages } from "@/utils/languanges";
import { useState } from "react";

const LanguageFilter = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      <Filter
        filterTitle={"Language"}
        filterItems={languages}
        chosenHeight={"h-[30px]"}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default LanguageFilter;
