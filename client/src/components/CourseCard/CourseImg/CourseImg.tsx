import { isProduction, baseUrl, localhostUrl } from "@/api/configuration";

const CourseImg: React.FC<{
  courseImg?: string;
  widthChosen?: string;
  standCardView: boolean;
  imgExplanation: string;
}> = ({ courseImg, widthChosen = "200px", standCardView, imgExplanation }) => {
  return (
    <div className={`border ${widthChosen}`}>
      <img
        src={courseImg}
        alt={imgExplanation}
        className={`w-full object-cover`}
        style={{ width: widthChosen }}
      />
    </div>
  );
};

export default CourseImg;
