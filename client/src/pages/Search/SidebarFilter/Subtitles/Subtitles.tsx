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
        chosenHeight={"h-[30px]"}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default Subtitles;
