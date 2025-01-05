import Filter from "@/components/Filter/Filter";
import { videoDurations } from "@/utils/videoDuration";
import { useState } from "react";

const VideosFilter = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      <Filter
        filterTitle={"Video Duration"}
        filterItems={videoDurations}
        chosenHeight={"h-[30px]"}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default VideosFilter;
