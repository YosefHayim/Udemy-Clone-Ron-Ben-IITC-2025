import Logo from '@/components/Logo/Logo';
import Burger from './Burger/Burger';
import { btnStyleNHover } from '@/utils/stylesStorage';
import SearchInput from '../SearchInput/SearchInput';
import CartAndSearchMobile from './CartAndSearchMobile/CartAndSearchMobile';
import { useEffect, useState } from 'react';

const MobileNavbar = ({ isTyping, setIsTyping }) => {
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  useEffect(() => {}, [showSearchMobile]);

  return (
    <div className="fixed z-50 flex w-full flex-col items-center justify-center bg-white px-2 py-2 shadow-carouselShadowBtn">
      {!showSearchMobile && (
        <div className="flex w-full items-center justify-between">
          <div className={`${btnStyleNHover}`}>
            <Burger />
          </div>
          <div className="flex h-full items-center justify-center">
            <Logo CustomCssSize="h-[3em] w-full object-contain mt-1" />
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
    </div>
  );
};

export default MobileNavbar;
