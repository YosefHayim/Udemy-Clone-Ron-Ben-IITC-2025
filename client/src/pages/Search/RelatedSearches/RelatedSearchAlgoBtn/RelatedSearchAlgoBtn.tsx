import { searchAlgoLocalStorage } from '@/utils/searchesOfUser';
import { useNavigate } from 'react-router-dom';

const RelatedSearchAlgoBtn = ({ algoSearch = 'the complete 20204 web development bootcamp' }) => {
  const navigate = useNavigate();
  const handleNavigateSearchTerm = () => {
    navigate(`/courses/search?src=ukw&q=${encodeURIComponent(algoSearch)}`);
    searchAlgoLocalStorage(algoSearch);
  };
  return (
    <div
      onClick={handleNavigateSearchTerm}
      className="min-w-min cursor-pointer rounded-[100em] bg-btnColor p-[0.5em] text-white hover:bg-[#892de1]"
    >
      <b>{algoSearch}</b>
    </div>
  );
};

export default RelatedSearchAlgoBtn;
