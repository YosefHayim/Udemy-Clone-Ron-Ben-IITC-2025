import { diffLoginOptionBtn } from '@/utils/stylesStorage';
import { Link } from 'react-router-dom';

const WebsiteLoginOptions = ({ text, to }) => {
  return (
    <div>
      <div className="bg-gray-100 p-3">
        <Link to={`${to}`}>
          <button className={`${diffLoginOptionBtn}`}>{text}</button>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteLoginOptions;
