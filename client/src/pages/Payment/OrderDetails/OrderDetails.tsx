import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

const OrderDetails: React.FC = () => {
  const coursesIdAdded = useSelector(
    (state: RootState) => state.cart.coursesAddedToCart
  );

  return (
    <div className="flex flex-col items-start justify-start gap-[1em] w-[400px]">
      <div className="flex flex-row items-start justify-start gap-[0.2em]">
        <b>Order details</b>
        <p>(1 Course)</p>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.2em]">
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
              chooseFlex={"flex flex-row"}
              itemsPosition="start"
              textColor="text-bg-black"
            />
          ))}
      </div>
    </div>
  );
};

export default OrderDetails;
