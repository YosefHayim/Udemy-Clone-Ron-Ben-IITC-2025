import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import DropdownMenu from '../DropDownMenu/DropDownMenu';
import ProfilePic from '@/components/ProfilePic/ProfilePic';
import { useEffect, useState } from 'react';

const Profile: React.FC<{ cookie: string }> = ({ cookie }) => {
  const fullName = useSelector((state: RootState) => state?.user.fullName);
  const profilePic = useSelector((state: RootState) => state?.user.profilePic);

  const [firstWord, secondWord] = fullName ? fullName.split(' ') : ['', ''];

  const shortcutName =
    (firstWord?.[0]?.toUpperCase() || '') + (secondWord?.[0]?.toUpperCase() || '');

  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {}, [cookie]);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className="cursor-pointer">
      <ProfilePic
          shortcutName={shortcutName}
          profilePic={profilePic}
          isBig={true}
          isHover={true}
          size="h-[1.7rem] w-[1.7rem]"  // ← black circle size 
          customTextSize="text-[1rem]" // ← font-size inside the black circle 
      />

      </div>

      {showDropDown && (
        <>
          <div className="absolute h-5 w-full bg-transparent" />
          <div className="absolute right-0 top-[1.8em] w-full">
            <DropdownMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
