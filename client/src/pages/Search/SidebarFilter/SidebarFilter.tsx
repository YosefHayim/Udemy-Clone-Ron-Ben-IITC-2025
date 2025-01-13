import RatingsFilter from "./Ratings/Ratings";
import LanguageFilter from "./Language/LanguageFilter";
import HandsOnPractice from "./HandsOnPractice/HandsOnPractice";
import VideosFilter from "./VideosDurations/VideosDurations";
import Topics from "./Topics/Topics";
import Levels from "./Levels/Levels";
import Subtitles from "./Subtitles/Subtitles";
import Price from "./Price/Price";
import ViewCertificatesOnly from "./ViewCertificatesOnly/ViewCertificatesOnly";

const SidebarFilter = ({ filterData, setFilterData }) => {
  return (
    <div className="relative w-[310px]">
      <ViewCertificatesOnly
        filterData={filterData}
        setFilterData={setFilterData}
      />
      <RatingsFilter filterData={filterData} setFilterData={setFilterData} />
      <LanguageFilter filterData={filterData} setFilterData={setFilterData} />
      <HandsOnPractice filterData={filterData} setFilterData={setFilterData} />
      <VideosFilter filterData={filterData} setFilterData={setFilterData} />
      <Topics filterData={filterData} setFilterData={setFilterData} />
      <Levels filterData={filterData} setFilterData={setFilterData} />
      <Subtitles filterData={filterData} setFilterData={setFilterData} />
      <Price filterData={filterData} setFilterData={setFilterData} />
    </div>
  );
};

export default SidebarFilter;
