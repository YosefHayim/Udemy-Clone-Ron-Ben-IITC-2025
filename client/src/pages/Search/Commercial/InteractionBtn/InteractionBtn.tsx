import { Button } from '@/components/ui/button';
import { BtnStyleNHoverTypeTwo } from '@/utils/stylesStorage';

const InteractionBtn = () => {
  return (
    <div className="absolute bottom-0 w-min py-[1em]">
      <Button className={`${BtnStyleNHoverTypeTwo}`}>Learn more</Button>
    </div>
  );
};

export default InteractionBtn;
