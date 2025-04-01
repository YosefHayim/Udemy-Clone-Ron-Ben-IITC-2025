const CourseImg: React.FC<{
  courseImg?: string;
  widthChosen?: string;
  standCardView: boolean;
  imgExplanation: string;
}> = ({ courseImg, widthChosen = "200px", standCardView, imgExplanation }) => {
  const showPlaceholder = !courseImg;

  return (
    <div className={`border ${widthChosen}`}>
      {showPlaceholder ? (
        <div
          className="flex h-[200px] w-full items-center justify-center bg-gray-200 text-sm text-gray-500"
          style={{ width: widthChosen }}
        >
          No Image
        </div>
      ) : (
        <img
          src={courseImg}
          alt={imgExplanation}
          className={`w-full object-cover`}
          style={{ width: widthChosen }}
        />
      )}
    </div>
  );
};

export default CourseImg;
