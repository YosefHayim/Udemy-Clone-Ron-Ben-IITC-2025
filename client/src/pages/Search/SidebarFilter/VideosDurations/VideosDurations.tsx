import Filter from "@/components/Filter/Filter";
import { videoDurations } from "@/utils/videoDuration";
import { useState } from "react";

const VideosDurations = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      <Filter
        filterTitle={"Video Duration"}
        filterItems={videoDurations}
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

export default VideosDurations;
