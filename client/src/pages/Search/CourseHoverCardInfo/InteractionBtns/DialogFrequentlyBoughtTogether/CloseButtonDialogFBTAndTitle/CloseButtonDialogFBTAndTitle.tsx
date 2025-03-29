import { IoClose } from "react-icons/io5";

const CloseButtonDialogFBTAndTitle = ({ setShowDialogOfFbt }) => {
  return (
    <div className="flex w-full items-center justify-between ">
      <div>
        <p className="font-sans font-bold">Added to cart</p>
      </div>
      <div
        onClick={() => setShowDialogOfFbt(false)}
        className="cursor-pointer rounded-[0.2em] p-[0.5em] text-gray-500 hover:bg-purpleHoverBtn"
      >
        <IoClose size={20} />
      </div>
    </div>
  );
};

export default CloseButtonDialogFBTAndTitle;
