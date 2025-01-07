import { Button } from "@/components/ui/button";

const UdemyBusiness = () => {
  return (
    <div className="mt-[1em] text-[0.8em] flex flex-col gap-[0.5em]">
      <b className="font-bold">Training 5 or more people?</b>
      <p>Get your team access to 27,000+ top Udemy courses anytime,anywhere.</p>
      <Button className="w-full text-black bg-white border border-gray-900 rounded-[0.2em] hover:bg-hoverDivGray">
        Try Udemy Business
      </Button>
    </div>
  );
};

export default UdemyBusiness;
