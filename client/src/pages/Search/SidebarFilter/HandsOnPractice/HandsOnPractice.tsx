import Filter from "@/components/Filter/Filter";
import { handsOnPractice } from "@/utils/handsOnPractice";
import { useState } from "react";

const HandsOnPractice = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div>
      <Filter
        filterTitle={"Hands-on Practice"}
        filterItems={handsOnPractice}
        chosenHeight={"h-[50px]"}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default HandsOnPractice;
