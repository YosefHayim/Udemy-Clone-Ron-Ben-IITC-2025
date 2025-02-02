import { Button } from "@/components/ui/button";

const InteractionBtn = () => {
  return (
    <div className="py-[1em] w-min absolute bottom-0">
      <Button className="font-bold bg-btnColor rounded-[0.3em] hover:bg-btnHoverColor w-full py-[1.5em] text-[1em]">
        Learn more
      </Button>
    </div>
  );
};

export default InteractionBtn;
