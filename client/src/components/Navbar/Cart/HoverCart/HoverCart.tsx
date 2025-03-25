import { Button } from '@/components/ui/button';
import ItemInCart from '../ItemInCart/ItemInCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader/Loader';
import { RootState } from '@/redux/store';

const HoverCart = () => {
  const [isLoading, setIsLoading] = useState(true);

  const totalToPay = useSelector((state: RootState) => state.cart.totalCourseDiscountPrices);
  const coursesIdAdded = useSelector((state: RootState) => state.cart.coursesAddedToCart);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [totalToPay, coursesIdAdded]);

  return (
    <div>
      <div className="absolute right-[0em] top-[1em] z-[1000] mt-[0.1em] flex w-[300px] cursor-pointer flex-col items-start justify-center rounded-[1em] border border-gray-300 bg-white shadow-alertAlgoInfo">
        <div className="w-full">
          {coursesIdAdded.length > 0 ? (
            coursesIdAdded.map((courseId: string) => (
              <ItemInCart
                key={courseId}
                courseImgSize={`h-[5em] w-[5em] rounded-[0.5em]`}
                courseId={courseId}
                hide={false}
                isMyLearning={false}
                showDisPrice={true}
                showFullPrice={false}
                shortCutInstructor={true}
                shortcutTitle={true}
                chooseFlex={'flex flex-col'}
                itemsPosition="start"
                textColor="text-bg-black"
                gapPrice="gap-[0em]"
              />
            ))
          ) : (
            <div className="mt-[1em] flex w-full flex-col items-center justify-center text-center">
              <p className="mb-[1em] font-light text-grayNavbarTxt">Your cart is empty.</p>
              <b className="cursor-pointer text-purpleStatic hover:text-purpleHover">
                <Link to="/">Keep shopping</Link>
              </b>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col p-[1em]">
          {totalToPay && coursesIdAdded ? (
            <div>
              <b className="text-[1.5em]">Total: ₪{totalToPay ? totalToPay.toFixed(2) : '0.00'}</b>
              <Button className="mt-[1em] w-full rounded-[0.3em] bg-btnColor py-[1.7em] font-sans font-extrabold hover:bg-btnHoverColor focus:outline-none">
                <Link to="/cart" className="cursor-pointer">
                  Go to cart
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HoverCart;
