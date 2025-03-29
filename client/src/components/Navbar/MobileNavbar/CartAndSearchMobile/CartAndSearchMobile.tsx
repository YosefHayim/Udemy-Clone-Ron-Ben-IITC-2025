import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Cart from '../../Cart/Cart';

const CartAndSearchMobile = ({ setShowSearchMobile }) => {
  return (
    <div className="flex items-center">
      <button
        className="cursor-pointer rounded-md p-2 hover:bg-purple-100 focus:outline-none"
        onClick={() => setShowSearchMobile(true)}
      >
        <MdOutlineSearch size={20} />
      </button>
      <div>
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default CartAndSearchMobile;
