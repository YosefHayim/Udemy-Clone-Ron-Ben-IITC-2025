import Loader from '@/components/Loader/Loader';
import { CoursePriceProps } from '@/types/types';
import { useEffect, useState } from 'react';

const CoursePrice: React.FC<CoursePriceProps> = ({
  discountPrice = 49.9,
  fullPrice = 369.9,
  chooseFlex = 'flex-col',
  showFullPrice = true,
  extraCSS,
  displayPercent = true,
}) => {
  const [loading, setLoading] = useState(true);
  const isFree = discountPrice === 0 || fullPrice === 0;

  const percentOff = !isFree ? Math.round(((fullPrice - discountPrice) / fullPrice) * 100) : 0;
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className={`${chooseFlex}`}>
        {/* Discount Price */}
        <div className="w-min">
          {loading && <Loader hSize="" paddingSetTo="0em" useSmallLoading useSmallBlackLoading />}
          {!loading && isFree && <b className={``}>Free</b>}
          {!loading && !isFree && <b className={`${extraCSS} text-2xl`}>₪{discountPrice}</b>}
        </div>

        {/* Full Price */}
        <div className="w-min">
          {loading && <Loader hSize="" paddingSetTo="0em" useSmallLoading useSmallBlackLoading />}
          {!loading && showFullPrice && !isFree && (
            <p className={`${extraCSS} text-base text-gray-500 line-through`}>₪{fullPrice}</p>
          )}
        </div>

        {/* Percent Off */}
        <div className="w-full">
          {!loading && !isFree && displayPercent && percentOff > 0 && (
            <span className={`${extraCSS} font-sans text-base`}>{percentOff}% off</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
