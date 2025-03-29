import { IoClose } from 'react-icons/io5';

const CloseMobileSearchButton = ({ setShowSearchMobile }) => {
  return (
    <button
      className="cursor-pointer rounded-[0.2em] p-2 text-gray-500 hover:bg-purpleHoverBtn focus:outline-none"
      onClick={() => setShowSearchMobile(false)}
    >
      <IoClose size={20} />
    </button>
  );
};

export default CloseMobileSearchButton;
