import Logo from '@/components/Logo/Logo';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Burger from './Burger/Burger';
import { btnStyleNHover } from '@/utils/stylesStorage';
import SearchInput from '../SearchInput/SearchInput';
import { MdOutlineSearch } from 'react-icons/md';
import CartAndSearchMobile from './CartAndSearchMobile/CartAndSearchMobile';

const MobileNavbar = ({ isTyping, setIsTyping }) => {
  return (
    <div className="fixed z-50 flex w-full flex-col items-center justify-center bg-white px-2 py-2 shadow-carouselShadowBtn">
      <div className="flex w-full items-center justify-between">
        <div className={`${btnStyleNHover}`}>
          <Burger />
        </div>
        <div>
          <Logo CustomCssSize="h-[2.5em]" />
        </div>
        <CartAndSearchMobile />
      </div>
      <div className={`flex`}>
        <SearchInput isTyping={isTyping} setIsTyping={setIsTyping} />
      </div>
    </div>
  );
};

export default MobileNavbar;
