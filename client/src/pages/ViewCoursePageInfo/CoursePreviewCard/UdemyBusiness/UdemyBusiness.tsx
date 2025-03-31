import { Button } from "@/components/ui/button";
import { btnStyleNHover } from "@/utils/stylesStorage";

const UdemyBusiness: React.FC = () => {
  return (
    <div className="mt-[1em]  flex flex-col gap-[0.5em]">
      <b className="font-sans font-extrabold">Training 5 or more people?</b>
      <p>Get your team access to 27,000+ top Udemy courses anytime,anywhere.</p>
      <Button
        className={`${btnStyleNHover} rounded-sm border border-purple-600 bg-white text-purple-600`}
      >
        Try Udemy Business
      </Button>
    </div>
  );
};

export default UdemyBusiness;
