import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const OrderDetails: React.FC = () => {
  const coursesIdAdded = useSelector((state: RootState) => state?.cart?.coursesAddedToCart);

  return (
    <div className="mt-2 flex w-full flex-col items-start justify-start gap-[1em]">
      <div className="flex w-full items-start justify-start gap-[0.2em]">
        <b>Order details</b>
        <p>({coursesIdAdded.length} Course)</p>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-6">
        {coursesIdAdded.length > 0 &&
          coursesIdAdded.map((courseId: string) => (
            <ItemInCart
              showInstructor={false}
              rowPrices={false}
              showHR={false}
              widthChosen={`h-[4em] w-[4em]`}
              key={courseId}
              courseId={courseId}
              hide={false}
              showDisPrice={true}
              shortCutInstructor={true}
              textSize="text-base"
              shortcutTitle={false}
              chooseFlex={"flex justify-start w-full"}
              itemsPosition="items-start"
              textColor="text-bg-black"
            />
          ))}
      </div>
    </div>
  );
};

export default OrderDetails;
