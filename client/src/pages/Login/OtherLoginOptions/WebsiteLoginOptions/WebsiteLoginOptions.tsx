import { diffLoginOptionBtn } from '@/utils/stylesStorage';
import { Link } from 'react-router-dom';

const WebsiteLoginOptions: React.FC<{
  text: string;
  to: string;
  extraCSS?;
  textAfterSpace?;
  textAfterSpaceCSS?;
}> = ({ text, to, extraCSS, textAfterSpace, textAfterSpaceCSS }) => {
  return (
    <div>
      <div className="bg-gray-100 p-3">
        <Link to={`${to}`}>
          <button className={`${diffLoginOptionBtn} ${extraCSS}`}>
            {text} <span className={`${textAfterSpaceCSS}`}>{textAfterSpace}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteLoginOptions;
