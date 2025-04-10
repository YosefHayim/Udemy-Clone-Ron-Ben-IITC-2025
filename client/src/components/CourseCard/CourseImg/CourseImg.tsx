import { isProduction, baseUrl, localhostUrl } from "@/api/configuration";

const CourseImg: React.FC<{
  courseImg?: string;
  widthChosen?: string;
  standCardView: boolean;
  imgExplanation: string;
}> = ({ courseImg, widthChosen = "200px", standCardView, imgExplanation }) => {
  const showPlaceholder = !courseImg;

  const getImageSrc = () => {
    if (!courseImg) return "";
    const isAbsoluteUrl = courseImg.startsWith("http://") || courseImg.startsWith("https://");
    return isAbsoluteUrl ? courseImg : `${isProduction ? baseUrl : localhostUrl}/${courseImg}`;
  };

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
          src={getImageSrc()}
          alt={imgExplanation}
          className="w-full object-cover"
          style={{ width: widthChosen }}
        />
      )}
    </div>
  );
};

export default CourseImg;
