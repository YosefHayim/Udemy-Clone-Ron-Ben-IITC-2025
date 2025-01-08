import Filter from "@/components/Filter/Filter";
import { topics } from "@/utils/topics";
import { useState } from "react";

const Topics = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      <Filter
        filterTitle={"Topics"}
        filterItems={topics}
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

export default Topics;
