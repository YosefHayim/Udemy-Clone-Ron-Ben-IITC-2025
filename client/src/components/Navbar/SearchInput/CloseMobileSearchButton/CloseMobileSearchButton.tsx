import { IoClose } from 'react-icons/io5';

const CloseMobileSearchButton = ({ setShowSearchMobile, showSearchMobile }) => {
  return (
    <div
      className="cursor-pointer rounded-[0.2em] p-2 text-gray-500 hover:bg-purpleHoverBtn"
      onClick={() => setShowSearchMobile(false)}
    >
      <IoClose size={20} />
    </div>
  );
};

export default CloseMobileSearchButton;
