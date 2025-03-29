import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput/SearchInput';
import LoginBtn from './LoginBtn/LoginBtn';
import SignupBtn from './SignupBtn/SignupBtn';
import Cart from './Cart/Cart';
import Logo from '../Logo/Logo';
import ButtonNavbar from '../ButtonNavbar/ButtonNavbar';
import Heart from './Heart/Heart';
import Notifications from './Notifications/Notifications';
import Profile from './Profile/Profile';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CategoriesMenu from './Categories/CategoriesMenu';
import ChangeLanguage from './DropDownMenu/ChangeLanguage/ChangeLanguage';
import SaleCommercialTwo from './SaleCommercials/SaleCommercialTwo/SaleCommercialTwo';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar/MobileNavbar';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const cookie = useSelector((state: RootState) => state?.user?.cookie);
  const prevLogWGoogle = useSelector((state: RootState) => state.user.isLoggedPreviouslyWithGoogle);
  const coursesInCart =
    useSelector((state: RootState) => state?.cart?.coursesAddedToCart) ||
    useSelector((state: RootState) => state?.cart?.coursesAddedToWishList);

  useEffect(() => {}, [cookie]);

  useEffect(() => {
    const body = document.querySelector('body');
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const courseId = target.closest('div')?.id;
      if (courseId) {
        navigate(`/course-view/${courseId}`);
      } else {
        setIsTyping(false);
        return;
      }
    };

    body.addEventListener('click', handleClick);

    return () => {
      body.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="w-full">
      {/* <SaleCommercial />dasdsa */}
      <SaleCommercialTwo />
      {!isMobile && (
        <div className="relative z-[50] flex w-full items-center justify-between bg-white px-[1.55rem] pb-[0.9em] pt-[0.2em] shadow-carouselShadowBtn">
          <div className="flex w-full items-center justify-between pt-[0.3rem]">
            <Link to="/">
              <Logo />
            </Link>
            <CategoriesMenu />
            <div className={'flex w-full items-center p-1'}>
              <div className="w-full">
                <SearchInput isTyping={isTyping} setIsTyping={setIsTyping} />
              </div>
            </div>
            <div
              className="flex w-full items-end justify-end gap-2"
              style={{ maxWidth: 'min-content' }}
            >
              <ButtonNavbar buttonName={'Udemy Business'} />
              <ButtonNavbar buttonName={'Teach on Udemy'} />
              {cookie && (
                <Link to="/wishlist">
                  <ButtonNavbar buttonName={'My learning'} />
                </Link>
              )}
              {cookie && (
                <div className="flex items-center">
                  <Heart />
                </div>
              )}
              <Link to="/cart">
                <div className="relative flex items-center">
                  <Cart />
                </div>
              </Link>
              <div className="flex items-center justify-around gap-[0.9rem]">
                {cookie && (
                  <div className="flex items-center">
                    <Notifications />
                  </div>
                )}
                {!cookie && (
                  <div className="flex flex-row gap-2">
                    <LoginBtn />
                    <SignupBtn />
                  </div>
                )}
              </div>
              {cookie && (
                <Link to="/user/edit-profile">
                  <div className="relative inline-block">
                    <Profile cookie={cookie} />
                    {coursesInCart.length >= 1 && (
                      <div className="absolute right-[-15%] top-[11%]  z-10 h-[0.85rem] w-[0.85rem] rounded-full bg-[#A435F0]"></div>
                    )}
                  </div>
                </Link>
              )}
              {!cookie && (
                <div>
                  <ChangeLanguage
                    size={20}
                    isClicked={isClicked}
                    setClicked={setClicked}
                    showIcon={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          <MobileNavbar isTyping={isTyping} setIsTyping={setIsTyping} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
