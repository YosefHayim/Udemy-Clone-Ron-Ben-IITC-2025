import Filter from "@/components/Filter/Filter";
import { levels } from "@/utils/levels";
import { useState } from "react";

const Levels = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div>
      <Filter
        filterTitle={"Level"}
        filterItems={levels}
        chosenHeight={"h-[30px]"}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default Levels;
