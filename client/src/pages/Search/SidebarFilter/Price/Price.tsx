import Filter from "@/components/Filter/Filter";
import { prices } from "@/utils/price";
import { useState } from "react";

const Price = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div>
      <Filter
        filterTitle={"Price"}
        filterItems={prices}
        chosenHeight={"h-[30px]"}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default Price;
