import RatingsFilter from './Ratings/Ratings';
import LanguageFilter from './Language/LanguageFilter';
import HandsOnPractice from './HandsOnPractice/HandsOnPractice';
import VideosFilter from './VideosDurations/VideosDurations';
import Topics from './Topics/Topics';
import Levels from './Levels/Levels';
import Subtitles from './Subtitles/Subtitles';
import Price from './Price/Price';
import ViewCertificatesOnly from './ViewCertificatesOnly/ViewCertificatesOnly';
import { SidebarFilterProps } from '@/types/types';

const SidebarFilter: React.FC<SidebarFilterProps> = () => {
  return (
    <div className="relative w-[310px]">
      <ViewCertificatesOnly />
      <RatingsFilter />
      <LanguageFilter />
      <HandsOnPractice />
      <VideosFilter />
      <Topics />
      <Levels />
      <Subtitles />
      <Price />
    </div>
  );
};

export default SidebarFilter;
