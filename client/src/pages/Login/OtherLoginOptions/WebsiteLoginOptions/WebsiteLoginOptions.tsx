import { diffLoginOptionBtn } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const WebsiteLoginOptions: React.FC<{
  text: string;
  to: string;
  extraCSS?: string;
  textAfterSpace?: string;
  textAfterSpaceCSS?: string;
  extraToFatherDiv?: string;
}> = ({ text, to, extraCSS, textAfterSpace, textAfterSpaceCSS, extraToFatherDiv }) => {
  return (
    <div className={`bg-gray-100 p-3 ${extraToFatherDiv} w-full text-center`}>
      <Link to={`${to}`}>
        <button className={`${diffLoginOptionBtn} ${extraCSS}`}>
          {text} <span className={`${textAfterSpaceCSS}`}>{textAfterSpace}</span>
        </button>
      </Link>
    </div>
  );
};

export default WebsiteLoginOptions;
