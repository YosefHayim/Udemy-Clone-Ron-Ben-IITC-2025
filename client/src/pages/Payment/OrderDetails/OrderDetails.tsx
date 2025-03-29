import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const OrderDetails: React.FC = () => {
  const coursesIdAdded = useSelector((state: RootState) => state.cart.coursesAddedToCart);

  return (
    <div className="flex w-[400px] flex-col items-start justify-start gap-[1em]">
      <div className="flex  items-start justify-start gap-[0.2em]">
        <b>Order details</b>
        <p>({coursesIdAdded.length} Course)</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.2em]">
        {coursesIdAdded.length > 0 &&
          coursesIdAdded.map((courseId: string) => (
            <ItemInCart
              showInstructor={false}
              rowPrices={false}
              showHR={false}
              courseImgSize=""
              key={courseId}
              courseId={courseId}
              hide={false}
              showDisPrice={true}
              shortCutInstructor={true}
              shortcutTitle={false}
              chooseFlex={"flex "}
              itemsPosition="start"
              textColor="text-bg-black"
            />
          ))}
      </div>
    </div>
  );
};

export default OrderDetails;
