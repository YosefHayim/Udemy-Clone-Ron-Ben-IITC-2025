import React, { useState } from 'react';
import { Button } from '../ui/button';
import { btnStyleNHover, regFullButtonPurpleHover } from '@/utils/stylesStorage';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import mylearningcourseplaceholderfrom from '/images/mylearningcourseplaceholder.jpg';

const ButtonNavbar: React.FC<{ buttonName: string }> = ({ buttonName }) => {
  const [isHovering, setIsHovering] = useState(false);
  const coursesInProgress = useSelector((state: RootState) => state?.user?.coursesInProgress);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-min-max relative mx-[0.2em]"
    >
      <p
        className={`${btnStyleNHover} flex-row overflow-hidden text-ellipsis whitespace-nowrap rounded-md px-3 py-3 font-sans text-[0.85rem] font-normal text-[#37474F]`}
      >
        {buttonName}
      </p>
      <div>
        {isHovering && (
          <div className="absolute right-0 top-[105%] z-50 flex w-[290px] flex-col items-center justify-center gap-[0.5em] rounded-lg border border-gray-300 bg-white p-4 text-center shadow-alertAlgoInfo">
            {buttonName === 'Udemy Business' && (
              <div className="flex flex-col items-center justify-center">
                <p className="font-sans text-base font-extrabold leading-tight text-gray-800">
                  Get your team access to over 27,000 top Udemy courses, anytime, anywhere.
                </p>
                <Button className="mt-2 rounded-[0.2rem] bg-btnColor px-14 py-[1.2rem] font-sans text-sm font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
                  <Link to="/not-found">Try Udemy Business</Link>
                </Button>
              </div>
            )}
            {buttonName === 'My learning' && (
              <div>
                {coursesInProgress?.length > 1 ? (
                  coursesInProgress?.map(
                    (progress) => (
                      console.log(progress),
                      (
                        // Placeholder for future
                        <div className="flex w-full flex-col items-center justify-start">
                          <div className="relative flex w-full items-center justify-start">
                            <img src={mylearningcourseplaceholderfrom} alt="" className="" />
                            <div className="flex w-full flex-col items-start justify-start gap-1 text-start">
                              <b>Web Design for Web Developers: Build Beautiful Websites!</b>
                              <div className="relative h-2 w-full bg-gray-300">
                                <div
                                  className="absolute left-0 top-0 h-full bg-purple-700"
                                  style={{ width: `50%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  )
                ) : (
                  <div>
                    <p className="font-sans font-extrabold leading-tight text-gray-800">
                      Start learning from over 250,000 courses today.
                    </p>
                    <Button className="w-full rounded-[0.3em] border border-purple-800 bg-white px-2 py-3 font-sans font-extrabold text-purple-800 hover:bg-purple-100 focus:outline-none">
                      <Link to="/">Browse now</Link>
                    </Button>
                  </div>
                )}
                {coursesInProgress && coursesInProgress?.length > 1 && (
                  <div>
                    <hr className="my-4 w-full" />
                    <button className={`${regFullButtonPurpleHover} w-full font-sans text-sm`}>
                      Go to My learning
                    </button>
                  </div>
                )}
              </div>
            )}
            {buttonName === 'Teach on Udemy' && (
              <div className="flex flex-col items-center justify-center">
                <p className="font-sans text-base font-extrabold leading-tight text-gray-800">
                  Turn what you know into an opportunity and reach millions around the world.
                </p>
                <Button className="mt-2 w-full rounded-[0.2rem] bg-btnColor px-14 py-[1.2rem] font-sans text-sm font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
                  <Link to="/teaching/?ref=teach_header">Learn more</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonNavbar;
