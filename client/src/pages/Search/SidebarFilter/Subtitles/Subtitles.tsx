import Filter from "@/components/Filter/Filter";
import { languages } from "@/utils/languanges";
import { useState } from "react";

const Subtitles = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div>
      <Filter
        filterTitle={"Subtitles"}
        filterItems={languages}
        chosenHeight={"h-[50px]"}
        display={display}
        setDisplay={setDisplay}
        useForSection={false}
        showLine={true}
        hideIcons={true}
      />
    </div>
  );
};

export default Subtitles;
