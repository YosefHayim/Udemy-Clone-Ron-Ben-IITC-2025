import { MdOutlineShoppingCart } from 'react-icons/md';
import CartCoursesNumber from './CartCoursesNumber/CartCoursesNumber';
import { useState } from 'react';
import HoverCart from './HoverCart/HoverCart';
import { btnStyleNHover } from '@/utils/stylesStorage';

const Cart = () => {
  const [showCartHover, setShowCartHover] = useState(false);

  const handleMouseEnter = () => setShowCartHover(true);
  const handleMouseLeave = () => setShowCartHover(false);

  return (
    <div
      className="relative mr-[0.8em]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${btnStyleNHover}`}>
        <MdOutlineShoppingCart className="h-5 w-5" />
        <CartCoursesNumber />
      </div>
      {showCartHover && (
        <div className="absolute left-0 top-full z-[5000] p-[2em]">
          <HoverCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
