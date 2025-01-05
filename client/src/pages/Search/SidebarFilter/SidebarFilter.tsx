import RatingsFilter from "./RatingsFilter/RatingsFilter";
import LanguageFilter from "./LanguageFilter/LanguageFilter";
import HandsOnPractice from "./HandsOnPractice/HandsOnPractice";
import VideosFilter from "./VideosFilter/VideosFilter";

const SidebarFilter = () => {
  return (
    <div>
      <RatingsFilter />
      <LanguageFilter />
      <HandsOnPractice />
      <VideosFilter />
    </div>
  );
};

export default SidebarFilter;
