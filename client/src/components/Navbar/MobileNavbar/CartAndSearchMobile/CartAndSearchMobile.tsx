import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Cart from '../../Cart/Cart';

const CartAndSearchMobile = () => {
  return (
    <div className="flex items-center">
      <div className="cursor-pointer rounded-md p-2 hover:bg-purple-100">
        <MdOutlineSearch size={20} />
      </div>
      <div>
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default CartAndSearchMobile;
