import { Button } from "@/components/ui/button";

const AddToCart = ({ textBtn = "Add to cart", courseId }) => {
  if (!courseId) {
    return;
  }

  return (
    <Button
      id={courseId}
      className={`font-bold bg-btnColor rounded-[0.2em] hover:bg-btnHoverColor w-full py-[1.5em] text-[1em]`}
    >
      {textBtn}
    </Button>
  );
};

export default AddToCart;
