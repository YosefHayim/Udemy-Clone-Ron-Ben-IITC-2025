import Filter from "@/components/Filter/Filter";
import { filterContext } from "@/contexts/filterSearch";
import { videoDurations } from "@/utils/videoDuration";
import { useContext, useState } from "react";

const VideosDurations: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(true);
  const [filterData, setFilterData] = useContext(filterContext);

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
        hideIcons={false}
      />
    </div>
  );
};

export default VideosDurations;
