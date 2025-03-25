import { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import HoverHeart from './HoverHeart/HoverHeart';
import { btnStyleNHover } from '@/utils/stylesStorage';
import { Link } from 'react-router-dom';

const Heart = () => {
  const [showHeartHover, setShowHeartHover] = useState(false);

  const handleMouseEnter = () => setShowHeartHover(true);
  const handleMouseLeave = () => setShowHeartHover(false);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${btnStyleNHover}`}>
        <Link to="/wishlist">
          <IoMdHeartEmpty className="h-6 w-6" />
        </Link>
      </div>
      {showHeartHover && (
        <div className="absolute left-0 top-full z-[5000] p-[2em]">
          <HoverHeart />
        </div>
      )}
    </div>
  );
};

export default Heart;
