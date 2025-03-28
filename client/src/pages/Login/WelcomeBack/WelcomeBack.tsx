import { RootState } from '@/redux/store';
import { FaRegUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const WelcomeBack = () => {
  const fullname = useSelector((state: RootState) => state?.user?.fullName);
  const globalEmail = useSelector((state: RootState) => state?.user?.email);
  const userProfileImage = useSelector((state: RootState) => state?.user?.profilePic);

  return (
    <div className={`"w-full block`}>
      <div className="mb-4 flex w-full flex-col items-center justify-center text-center">
        <div>
          {userProfileImage.length > 1 ? (
            <img
              src={userProfileImage}
              alt="user profile image"
              className="h-[5rem] w-[6em] rounded-[100em] bg-black"
            />
          ) : (
            <div className="rounded-full bg-black p-6">
              <FaRegUser size={24} className="text-white" />
            </div>
          )}
        </div>
        <div className="my-2 flex flex-col items-center justify-center gap-2">
          <b className="font-sans font-extrabold">Welcome back, {fullname}</b>
          <p className="w-full text-sm font-medium">
            We’ll email <b className="font-sans font-extrabold">{globalEmail}</b> a code for a
            secure passwordless log-in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
