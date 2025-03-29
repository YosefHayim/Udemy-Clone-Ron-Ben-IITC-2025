import courseImgPlaceholder from '/images/image.png';

const CourseImg: React.FC<{
  courseImg: string;
  widthChosen?: string;
  standCardView: boolean;
  imgExplanation: string;
}> = ({ courseImg = courseImgPlaceholder, widthChosen = '200px' }) => {
  return (
    <div className="border">
      <img src={courseImg} alt="" className={`w-[30em]`} />
    </div>
  );
};

export default CourseImg;
