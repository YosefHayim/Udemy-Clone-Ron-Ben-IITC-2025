import ProfilePic from '@/components/ProfilePic/ProfilePic';
import { Link } from 'react-router-dom';

const DropDownMenuProfileArea = ({ shortcutName, profilePic, email, fullName }) => {
  return (
    <div className="my-2 flex w-full items-center gap-2 border-b p-1">
      <Link to="/user/edit-profile">
        <ProfilePic
          isHover={false}
          shortcutName={shortcutName}
          profilePic={profilePic}
          isBig={true}
        />
      </Link>
      <div className="w-full">
        <div className="font-sans font-extrabold text-gray-800 hover:text-btnColor">{fullName}</div>
        <div className=" text-gray-500">{email}</div>
      </div>
    </div>
  );
};

export default DropDownMenuProfileArea;
