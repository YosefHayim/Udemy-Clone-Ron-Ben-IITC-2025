import { Button } from "@/components/ui/button";
import { BtnStyleNHoverTypeTwo } from "@/utils/stylesStorage";

const InteractionBtn = () => {
  return (
    <div className="py-[1em] w-min absolute bottom-0">
      <Button className={`${BtnStyleNHoverTypeTwo}`}>Learn more</Button>
    </div>
  );
};

export default InteractionBtn;
