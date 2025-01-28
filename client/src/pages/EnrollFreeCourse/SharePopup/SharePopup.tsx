import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useLocation } from "react-router-dom";

const SharePopup = ({ isClicked, setClicked }) => {
  const location = useLocation();

  const handleCopyText = () => {
    navigator.clipboard.writeText(location.pathname);
  };

  return (
    <div>
      <Dialog open={isClicked} onOpenChange={setClicked}>
        <DialogContent className="w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-bold">Share this course</DialogTitle>
            <DialogDescription>
              <div className="flex flex-row w-full gap-[0.4em]">
                <input
                  type="text"
                  value={location.pathname}
                  disabled={true}
                  className="w-full bg-white border border-gray-300 h-[2.5em] rounded-[0.2em]"
                />
                <button
                  onClick={handleCopyText}
                  className="px-6 py-2 bg-purple-600 text-white rounded-[0.2em] shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4 font-bold"
                >
                  Copy
                </button>
              </div>
              <div className="flex flex-row items-center justify-center gap-[1em] mt-[0.7em]">
                <div className="rounded-[100em] p-[0.5em] border border-purple-900 cursor-pointer hover:bg-purple-200">
                  <FaFacebook className="text-purple-600 text-[1.3em]" />
                </div>
                <div className="rounded-[100em] p-[0.5em] border border-purple-900 cursor-pointer hover:bg-purple-200">
                  <FaSquareXTwitter className="text-purple-600 text-[1.3em]" />
                </div>
                <div className="rounded-[100em] p-[0.5em] border border-purple-900 cursor-pointer hover:bg-purple-200">
                  <IoMdMail className="text-purple-600 text-[1.3em]" />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SharePopup;
