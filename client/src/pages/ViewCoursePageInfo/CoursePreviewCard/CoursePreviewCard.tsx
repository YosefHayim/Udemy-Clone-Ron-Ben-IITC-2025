import { useState, useEffect } from 'react';
import CoursePrice from '@/components/CourseCard/CoursePrice/CoursePrice';
import MoneyBack from './MoneyBack/MoneyBack';
import CourseIncludes from './CourseIncludes/CourseIncludes';
import TimeLeftBuyCourse from './TimeLeftBuyCourse/TimeLeftBuyCourse';
import CouponArea from './CouponArea/CouponArea';
import UdemyBusiness from './UdemyBusiness/UdemyBusiness';
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { AiFillInfoCircle } from 'react-icons/ai';
import { RootState } from '@/redux/store';
import { CoursePreviewCardProps } from '@/types/types';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import InteractionsBtns from '@/pages/Search/CourseHoverCardInfo/InteractionBtns/InteractionsBtns';
import BuyNowBtn from './AddCartNBuyBtn/BuyNowBtn';
import InteractionButtonsOfPreviewCard from './InteractionButtonsOfPreviewCard/InteractionButtonsOfPreviewCard';

const CoursePreviewCard: React.FC<{
  courseImg: string;
  coursePrice: number;
  fullPrice: number;
  courseId: string;
  firstLessonId?: string;
  courseTopic: string;
  instructorId: string;
  discountPrice: number;
}> = ({
  courseImg,
  coursePrice,
  fullPrice,
  courseId,
  firstLessonId,
  courseTopic,
  instructorId,
  discountPrice,
}) => {
  const [isAlreadyBought, setAlreadyBought] = useState(false);
  const [isAlreadyInCart, setAlreadyInCart] = useState(false);
  const navigate = useNavigate();

  const coursesBought = useSelector((state: RootState) => state?.user?.coursesBought);

  useEffect(() => {
    if (Array.isArray(coursesBought)) {
      setAlreadyBought(coursesBought.some((course) => course.courseId === courseId));
    } else {
      setAlreadyBought(false); // Handle cases where coursesBought is not an array
    }
  }, [coursesBought, courseId]);

  const navigateCourseLesson = () => {
    navigate(`/course/${courseId}/lesson/${firstLessonId}/overview`);
  };

  return (
    <div
      className={`z-[10] w-full  border border-b-gray-100 bg-white shadow-previewCourseCardShadow`}
    >
      <div className="relative" onClick={navigateCourseLesson}>
        <img src={courseImg} alt="Image of the course" className="h-full w-full object-cover" />

        <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-50">
          <IoPlayCircleSharp className="text-[6em] text-white" />
          <b className="absolute bottom-[5%] font-sans text-[1.4em] font-extrabold text-white">
            Preview this course
          </b>
        </div>
      </div>

      <div className="p-[1.5em]">
        <div className={isAlreadyBought ? 'hidden' : 'flex'}>
          <CoursePrice
            showFullPrice={true}
            discountPrice={coursePrice}
            fullPrice={fullPrice}
            chooseFlex={'flex w-full items-center justify-start gap-2'}
          />
        </div>
        {isAlreadyBought && (
          <div className="flex w-full flex-col items-start justify-start">
            <div className="mb-[0.5em] flex  items-start justify-start gap-[0.5em]">
              <AiFillInfoCircle className="text-[2.5em] text-btnColor" />
              <b className="text-[1.3em]">You purchased this course on Aug. 26, 2024</b>
            </div>
            <Button
              className="w-full rounded-[0.2em] font-sans font-extrabold text-white"
              onClick={navigateCourseLesson}
            >
              Go to course
            </Button>
          </div>
        )}
        {!isAlreadyInCart ? (
          <div className="w-full">
            <TimeLeftBuyCourse coursePrice={coursePrice} />
            <InteractionsBtns
              BtnText="Go to cart"
              customHeartExtraCSS={`rounded-sm  p-[0.8em] pt-[0.6em] `}
              isDisplayHeart={true}
              instructorId={instructorId}
              courseTopic={courseTopic}
              courseId={courseId}
              coursePrice={coursePrice}
              fullPriceCourse={fullPrice}
            />
            <div className="mt-2 w-full">
              <BuyNowBtn courseId={courseId} discountPrice={discountPrice} fullPrice={fullPrice} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <MoneyBack />
        <CourseIncludes />
        <InteractionButtonsOfPreviewCard />
        <CouponArea />
        <UdemyBusiness />
      </div>
    </div>
  );
};

export default CoursePreviewCard;
