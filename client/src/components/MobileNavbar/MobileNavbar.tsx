import Logo from '@/components/Logo/Logo';
import Burger from './Burger/Burger';
import { btnStyleNHover } from '@/utils/stylesStorage';
import CartAndSearchMobile from './CartAndSearchMobile/CartAndSearchMobile';
import { useEffect, useState } from 'react';
import SearchInput from '../Navbar/SearchInput/SearchInput';
import MobileSidebar from './MobileSidebar/MobileSidebar';
import { Link } from 'react-router-dom';

const MobileNavbar = ({ isTyping, setIsTyping }) => {
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {}, [showSearchMobile]);

  return (
    <div className="fixed z-50 flex w-full flex-col items-center justify-center bg-white px-2 py-2 shadow-carouselShadowBtn">
      {!showSearchMobile && (
        <div className="flex w-full items-center justify-between">
          <div className={`${btnStyleNHover}`} onClick={() => setShowSidebar(true)}>
            <Burger />
          </div>
          <div className="flex h-full items-center justify-center">
            <Link to="/">
              <Logo CustomCssSize="h-[3em] w-full object-contain mt-1" />
            </Link>
          </div>
          <CartAndSearchMobile setShowSearchMobile={setShowSearchMobile} />
        </div>
      )}
      <div className={` w-full`}>
        <SearchInput
          showSearchMobile={showSearchMobile}
          setShowSearchMobile={setShowSearchMobile}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          extraCSS={`rounded-sm border-none hover:bg-gray-100`}
        />
      </div>
      <MobileSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default MobileNavbar;
