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

export default Price;
